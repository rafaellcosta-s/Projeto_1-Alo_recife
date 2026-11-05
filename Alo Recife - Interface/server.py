#!/usr/bin/env python3
"""Servidor local do Alô Recife: páginas estáticas + persistência de feedback em JSON."""
from __future__ import annotations

import json
import os
import threading
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parent
DATA_DIR = ROOT / "data"
DATA_FILE = DATA_DIR / "feedbacks.json"
PORT = int(os.environ.get("PORT", "8000"))
HOST = os.environ.get("HOST", "127.0.0.1")
LOCK = threading.Lock()
MAX_BODY = 256_000


def read_records() -> list[dict]:
    if not DATA_FILE.exists():
        return []
    try:
        value = json.loads(DATA_FILE.read_text(encoding="utf-8"))
        return value if isinstance(value, list) else []
    except (OSError, json.JSONDecodeError):
        return []


def write_records(records: list[dict]) -> None:
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    temporary = DATA_FILE.with_suffix(".tmp")
    temporary.write_text(json.dumps(records, ensure_ascii=False, indent=2), encoding="utf-8")
    temporary.replace(DATA_FILE)


class AlorecifeHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def send_json(self, payload, status=200):
        encoded = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(encoded)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(encoded)

    def do_GET(self):
        if urlparse(self.path).path == "/api/feedback":
            with LOCK:
                self.send_json(read_records())
            return
        super().do_GET()

    def do_POST(self):
        if urlparse(self.path).path != "/api/feedback":
            self.send_json({"error": "Endpoint not found"}, 404)
            return

        try:
            length = int(self.headers.get("Content-Length", "0"))
            if length <= 0 or length > MAX_BODY:
                self.send_json({"error": "Invalid request size"}, 413)
                return
            record = json.loads(self.rfile.read(length).decode("utf-8"))
            if not isinstance(record, dict):
                self.send_json({"error": "Feedback must be a JSON object"}, 400)
                return
            value = record.get("valor")
            if value is not None and (type(value) is not int or value not in (1, 2, 3, 4)):
                self.send_json({"error": "Rating must be null or an integer from 1 to 4"}, 400)
                return
            if not record.get("id") or not record.get("data"):
                self.send_json({"error": "Feedback id and date are required"}, 400)
                return
        except (ValueError, UnicodeDecodeError, json.JSONDecodeError):
            self.send_json({"error": "Invalid JSON"}, 400)
            return

        with LOCK:
            records = read_records()
            if not any(item.get("id") == record["id"] for item in records):
                records.append(record)
                write_records(records)
            self.send_json({"saved": True, "count": len(records)})

    def log_message(self, fmt, *args):
        # Evita poluir o terminal do totem a cada toque; erros permanecem visíveis.
        if args and str(args[1] if len(args) > 1 else "").startswith("4"):
            super().log_message(fmt, *args)


if __name__ == "__main__":
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    DATA_FILE.touch(exist_ok=True)
    if DATA_FILE.stat().st_size == 0:
        DATA_FILE.write_text("[]\n", encoding="utf-8")
    server = ThreadingHTTPServer((HOST, PORT), AlorecifeHandler)
    print(f"Alô Recife disponível em http://localhost:{PORT}")
    print(f"Feedbacks serão gravados em: {DATA_FILE}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nServidor encerrado.")
    finally:
        server.server_close()
