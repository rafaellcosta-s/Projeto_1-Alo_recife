/*
  ============================================================
  TOTEM DE TURISMO - RECIFE
  Leitura de 6 botões físicos com debounce por software (millis)
  ============================================================

  Escolha a abordagem alterando a constante ABORDAGEM abaixo:

    ABORDAGEM 1 -> Comunicação Serial (qualquer placa: Uno, Nano, Mega,
                   Pro Micro, Leonardo...). Envia "1", "2" ... "6" + quebra
                   de linha. Ideal para Web Serial API, Python ou Node.

    ABORDAGEM 2 -> Teclado USB HID (SOMENTE placas ATmega32U4:
                   Pro Micro, Leonardo, Micro). O Arduino é reconhecido
                   como um teclado e digita as teclas '1' a '6'.

  Ligação: cada botão entre o pino digital e o GND.
  Usamos o resistor de PULL-UP interno (INPUT_PULLUP):
    - Botão solto      -> pino lê HIGH
    - Botão pressionado -> pino lê LOW
*/

// =====================  CONFIGURAÇÃO  =====================
#define ABORDAGEM 1   // 1 = Serial (Web Serial, padrão, funciona em qualquer placa) | 2 = Teclado USB HID

#if ABORDAGEM == 2
  #if !defined(USBCON)
    #error "ABORDAGEM 2 (teclado USB) só funciona em Leonardo/Pro Micro/Micro. Em Uno, Nano ou Mega use ABORDAGEM 1."
  #endif
  #include <Keyboard.h>   // Só compila em placas ATmega32U4
#endif

const uint8_t NUM_BOTOES = 6;

// Pinos digitais usados (botão 1 -> pino 2, botão 2 -> pino 3, ...)
const uint8_t PINOS_BOTOES[NUM_BOTOES] = {2, 3, 4, 5, 6, 7};

// Tempo mínimo (ms) que o sinal precisa ficar estável para ser aceito
const unsigned long TEMPO_DEBOUNCE = 50;

// =====================  VARIÁVEIS DE ESTADO  =====================
bool ultimaLeitura[NUM_BOTOES];               // última leitura bruta do pino
bool estadoEstavel[NUM_BOTOES];               // estado já "validado" (sem ruído)
unsigned long ultimoTempoMudanca[NUM_BOTOES]; // quando a leitura bruta mudou pela última vez

// =====================  AÇÃO AO PRESSIONAR  =====================
// Recebe o identificador do botão (1 a 6) e envia conforme a abordagem
void botaoPressionado(uint8_t id) {
#if ABORDAGEM == 1
  // ---------- ABORDAGEM A: SERIAL ----------
  // Envia o número do botão seguido de quebra de linha (\r\n).
  // Exemplo de saída: "3"
  Serial.println(id);

#elif ABORDAGEM == 2
  // ---------- ABORDAGEM B: TECLADO HID ----------
  // '0' + id converte o número em caractere: 1 -> '1', 2 -> '2', ...
  Keyboard.write('0' + id);
#endif
}

// =====================  SETUP  =====================
void setup() {
  for (uint8_t i = 0; i < NUM_BOTOES; i++) {
    pinMode(PINOS_BOTOES[i], INPUT_PULLUP);   // ativa o pull-up interno
    ultimaLeitura[i] = HIGH;                  // em repouso o pino fica em HIGH
    estadoEstavel[i] = HIGH;
    ultimoTempoMudanca[i] = 0;
  }

#if ABORDAGEM == 1
  Serial.begin(9600);   // Use a mesma velocidade (baud rate) no lado web/desktop
#elif ABORDAGEM == 2
  Keyboard.begin();     // Inicia a emulação de teclado USB
#endif
}

// =====================  LOOP PRINCIPAL  =====================
void loop() {
  unsigned long agora = millis();

  for (uint8_t i = 0; i < NUM_BOTOES; i++) {
    bool leitura = digitalRead(PINOS_BOTOES[i]);

    // 1) Se a leitura mudou (pode ser ruído ou aperto real), reinicia o cronômetro
    if (leitura != ultimaLeitura[i]) {
      ultimoTempoMudanca[i] = agora;
      ultimaLeitura[i] = leitura;
    }

    // 2) Se o sinal ficou estável por mais que TEMPO_DEBOUNCE...
    if ((agora - ultimoTempoMudanca[i]) > TEMPO_DEBOUNCE) {

      // 3) ...e é diferente do estado já validado, houve uma mudança real
      if (leitura != estadoEstavel[i]) {
        estadoEstavel[i] = leitura;

        // 4) LOW = botão pressionado (pull-up). Só age no APERTAR,
        //    não ao soltar, evitando envio duplo.
        if (leitura == LOW) {
          botaoPressionado(i + 1);   // identificador de 1 a 6
        }
      }
    }
  }
}
