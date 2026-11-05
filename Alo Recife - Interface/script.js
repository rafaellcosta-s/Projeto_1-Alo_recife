/* =====================================================
   ALÔ RECIFE — INTERFACE E LÓGICA DO TOTEMFONE
   Perguntas e critérios de recomendação definidos pela equipe.
   ===================================================== */

const TEMPO_INATIVIDADE = 60000;
const LANG_HTML = { pt: "pt-BR", en: "en", es: "es", de: "de" };

/* =====================================================
   TEXTOS FIXOS DA INTERFACE — 4 IDIOMAS
   Baseado no arquivo funcional compartilhado pelo grupo.
   ===================================================== */
const TEXTOS = {
  pt: {
    tagline: "Descubra Recife do seu jeito!",
    sobreP1: "Nós somos o Alô Recife! Uma equipe de estudantes da CESAR School dos cursos de Ciência da Computação e Design, reunidos para a disciplina de Projetos 1. Juntos, desenvolvemos o Totenfone: uma nova forma de enxergar e explorar Recife, desde os pontos turísticos mais famosos até os cantinhos pouco conhecidos.",
    sobreP2: "O projeto recebeu esse nome carinhoso por reaproveitar orelhões que já não estão mais em funcionamento. A partir de algumas perguntas simples, o Totenfone indica o passeio ideal para o perfil do usuário — sendo perfeito tanto para quem está visitando quanto para os próprios moradores da cidade.",
    sobreP3: "Combinando o mundo físico e o digital, nós do Alô Recife buscamos valorizar a cultura e o turismo local, oferecendo uma experiência única e interativa de reconexão com a nossa cidade.",
    fotoEquipe: "Espaço reservado para a foto da equipe",
    ondeIr: "Para onde ir hoje?", idiomas: "Idiomas", sobre: "Sobre nós",
    selecioneIdioma: "Selecione seu idioma",
    voltarInicio: "Voltar à tela inicial", voltar: "Voltar",
    contador: "Pergunta {n} de {total}",
    seuPasseio: "Seu passeio ideal",
    rotaCta: "Confira a rota para seu destino",
    encerrar: "Encerrar",
    feedbackTitulo: "Como você avalia sua experiência com o totenfone?", naoAvaliar: "Não Avaliar", sobreDestino: "Sobre o destino:"
  },
  en: {
    tagline: "Discover Recife your way!",
    sobreP1: "We are Alô Recife! A team of CESAR School students from the Computer Science and Design programs, brought together for the Projects 1 course. Together, we developed Totenfone: a new way to see and explore Recife, from its best-known tourist attractions to its lesser-known corners.",
    sobreP2: "The project received this affectionate name because it reuses telephone booths that are no longer in service. By answering a few simple questions, Totenfone recommends an outing that suits each user's profile — ideal for both visitors and the city's own residents.",
    sobreP3: "By combining the physical and digital worlds, we at Alô Recife aim to celebrate local culture and tourism, offering a unique, interactive experience that helps people reconnect with our city.",
    fotoEquipe: "Space reserved for the team photo",
    ondeIr: "Where to go today?", idiomas: "Languages", sobre: "About us",
    selecioneIdioma: "Select your language",
    voltarInicio: "Back to home screen", voltar: "Back",
    contador: "Question {n} of {total}",
    seuPasseio: "Your ideal tour",
    rotaCta: "Check the route to your destination",
    encerrar: "Finish",
    feedbackTitulo: "How would you rate your Totemfone experience?", naoAvaliar: "Skip", sobreDestino: "About this destination:"
  },
  es: {
    tagline: "¡Descubre Recife a tu manera!",
    sobreP1: "¡Somos Alô Recife! Un equipo de estudiantes de CESAR School de las carreras de Ciencias de la Computación y Diseño, reunidos para la asignatura Proyectos 1. Juntos desarrollamos Totenfone: una nueva forma de ver y explorar Recife, desde sus puntos turísticos más conocidos hasta sus rincones menos conocidos.",
    sobreP2: "El proyecto recibió este nombre cariñoso porque reutiliza teléfonos públicos que ya no están en funcionamiento. A partir de unas preguntas sencillas, Totenfone recomienda un paseo adecuado al perfil de cada usuario, tanto para quienes visitan la ciudad como para sus propios habitantes.",
    sobreP3: "Al combinar el mundo físico y el digital, en Alô Recife buscamos valorar la cultura y el turismo local, ofreciendo una experiencia única e interactiva para reconectar con nuestra ciudad.",
    fotoEquipe: "Espacio reservado para la foto del equipo",
    ondeIr: "¿A dónde ir hoy?", idiomas: "Idiomas", sobre: "Sobre nosotros",
    selecioneIdioma: "Selecciona tu idioma",
    voltarInicio: "Volver a la pantalla de inicio", voltar: "Volver",
    contador: "Pregunta {n} de {total}",
    seuPasseio: "Tu paseo ideal",
    rotaCta: "Consulta la ruta a tu destino",
    encerrar: "Finalizar",
    feedbackTitulo: "¿Cómo valoras tu experiencia con el Totemfone?", naoAvaliar: "No evaluar", sobreDestino: "Sobre el destino:"
  },
  de: {
    tagline: "Entdecke Recife auf deine Art!",
    sobreP1: "Wir sind Alô Recife! Ein Team von Studierenden der CESAR School aus den Studiengängen Informatik und Design, das im Kurs Projekte 1 zusammengekommen ist. Gemeinsam haben wir Totenfone entwickelt: eine neue Art, Recife zu entdecken — von den bekanntesten Sehenswürdigkeiten bis zu weniger bekannten Ecken.",
    sobreP2: "Der liebevolle Name entstand, weil wir öffentliche Telefonzellen wiederverwenden, die nicht mehr in Betrieb sind. Mit einigen einfachen Fragen empfiehlt Totenfone einen Ausflug, der zum Profil der Nutzerinnen und Nutzer passt — sowohl für Besuchende als auch für die Einwohner der Stadt.",
    sobreP3: "Indem wir die physische und die digitale Welt verbinden, möchten wir bei Alô Recife die lokale Kultur und den Tourismus stärken und ein einzigartiges, interaktives Erlebnis schaffen, das Menschen wieder mit unserer Stadt verbindet.",
    fotoEquipe: "Platzhalter für das Teamfoto",
    ondeIr: "Wohin heute?", idiomas: "Sprachen", sobre: "Über uns",
    selecioneIdioma: "Wähle deine Sprache",
    voltarInicio: "Zurück zum Startbildschirm", voltar: "Zurück",
    contador: "Frage {n} von {total}",
    seuPasseio: "Dein idealer Ausflug",
    rotaCta: "Route zum Ziel ansehen",
    encerrar: "Beenden",
    feedbackTitulo: "Wie bewertest du deine Erfahrung mit dem Totemfone?", naoAvaliar: "Nicht bewerten", sobreDestino: "Über das Ziel:"
  }
};

/* =====================================================
   PERGUNTAS DEFINITIVAS — 6 ETAPAS
   ===================================================== */
const PERGUNTAS = [
  {
    chave: "regiao",
    texto: {pt:"Qual região do Recife?",en:"Which area of Recife?",es:"¿Qué zona de Recife?",de:"Welche Gegend von Recife?"},
    subtitulo: {pt:"Escolha onde será o seu passeio.",en:"Choose the area for your outing.",es:"Elige dónde será tu paseo.",de:"Wähle das Gebiet für deinen Ausflug."},
    alternativas: [
      {chave:"norte",texto:{pt:"Zona Norte",en:"North Zone",es:"Zona Norte",de:"Nordzone"}},
      {chave:"sul",texto:{pt:"Zona Sul",en:"South Zone",es:"Zona Sur",de:"Südzone"}},
      {chave:"centro",texto:{pt:"Centro Hist.",en:"Historic Center",es:"Centro Histórico",de:"Historisches Zentrum"}},
      {chave:"oeste",texto:{pt:"Zona Oeste",en:"West Zone",es:"Zona Oeste",de:"Westzone"}}
    ]
  },
  {
    chave: "companhia",
    texto: {pt:"Quem vai com você?",en:"Who will be joining you?",es:"¿Quién irá contigo?",de:"Wer begleitet dich?"},
    subtitulo: {pt:"Qual será o tamanho do grupo para o passeio?",en:"How large will your group be?",es:"¿De qué tamaño será el grupo?",de:"Wie groß wird deine Gruppe sein?"},
    alternativas: [
      {chave:"sozinho",texto:{pt:"Sozinho(a)",en:"On my own",es:"Solo(a)",de:"Allein"}},
      {chave:"casal",texto:{pt:"Em casal",en:"As a couple",es:"En pareja",de:"Als Paar"}},
      {chave:"familia",texto:{pt:"Em família",en:"With family",es:"En familia",de:"Mit der Familie"}},
      {chave:"amigos",texto:{pt:"Com amigos",en:"With friends",es:"Con amigos",de:"Mit Freunden"}}
    ]
  },
  {
    chave: "duracao",
    texto: {pt:"Quanto tempo você tem?",en:"How much time do you have?",es:"¿Cuánto tiempo tienes?",de:"Wie viel Zeit hast du?"},
    subtitulo: {pt:"Qual será a duração do passeio?",en:"How long would you like your outing to last?",es:"¿Cuánto durará el paseo?",de:"Wie lange soll dein Ausflug dauern?"},
    alternativas: [
      {chave:"1-2",texto:{pt:"1 a 2 horas",en:"1 to 2 hours",es:"De 1 a 2 horas",de:"1 bis 2 Stunden"}},
      {chave:"2-4",texto:{pt:"2 a 4 horas",en:"2 to 4 hours",es:"De 2 a 4 horas",de:"2 bis 4 Stunden"}},
      {chave:"4-6",texto:{pt:"4 a 6 horas",en:"4 to 6 hours",es:"De 4 a 6 horas",de:"4 bis 6 Stunden"}},
      {chave:"mais-6",texto:{pt:"Mais de 6 horas",en:"More than 6 hours",es:"Más de 6 horas",de:"Mehr als 6 Stunden"}}
    ]
  },
  {
    chave: "transporte",
    texto: {pt:"Como prefere se deslocar?",en:"How do you prefer to get around?",es:"¿Cómo prefieres desplazarte?",de:"Wie möchtest du dich fortbewegen?"},
    subtitulo: {pt:"Qual meio de transporte você usará para chegar ao destino?",en:"How will you travel to your destination?",es:"¿Qué medio de transporte usarás para llegar al destino?",de:"Welches Verkehrsmittel nutzt du für den Weg zum Ziel?"},
    alternativas: [
      {chave:"ape",texto:{pt:"A pé",en:"On foot",es:"A pie",de:"Zu Fuß"}},
      {chave:"bicicleta",texto:{pt:"De bicicleta",en:"By bicycle",es:"En bicicleta",de:"Mit dem Fahrrad"}},
      {chave:"carro",texto:{pt:"De carro",en:"By car",es:"En coche",de:"Mit dem Auto"}},
      {chave:"publico",texto:{pt:"Transporte público",en:"Public transport",es:"Transporte público",de:"Mit öffentlichen Verkehrsmitteln"}}
    ]
  },
  {
    chave: "ambiente",
    texto: {pt:"Qual ambiente você prefere?",en:"What kind of place do you prefer?",es:"¿Qué tipo de ambiente prefieres?",de:"Welche Umgebung bevorzugst du?"},
    subtitulo: {pt:"O que você gostaria de explorar no passeio de hoje?",en:"What would you like to explore today?",es:"¿Qué te gustaría explorar hoy?",de:"Was möchtest du heute erkunden?"},
    alternativas: [
      {chave:"natureza",texto:{pt:"Parques ou praias",en:"Parks or beaches",es:"Parques o playas",de:"Parks oder Strände"}},
      {chave:"ruas",texto:{pt:"Ruas históricas",en:"Historic streets",es:"Calles históricas",de:"Historische Straßen"}},
      {chave:"museus",texto:{pt:"Museus ou galerias",en:"Museums or galleries",es:"Museos o galerías",de:"Museen oder Galerien"}},
      {chave:"religioso",texto:{pt:"Santuários religiosos",en:"Religious sanctuaries",es:"Santuarios religiosos",de:"Religiöse Heiligtümer"}}
    ]
  },
  {
    chave: "custo",
    texto: {pt:"Quanto pretende gastar?",en:"How much do you plan to spend?",es:"¿Cuánto piensas gastar?",de:"Wie viel möchtest du ausgeben?"},
    subtitulo: {pt:"Qual é o seu orçamento para o passeio de hoje?",en:"What is your budget for today’s outing?",es:"¿Cuál es tu presupuesto para el paseo de hoy?",de:"Wie hoch ist dein Budget für den heutigen Ausflug?"},
    alternativas: [
      {chave:"gratis",texto:{pt:"Gratuito",en:"Free",es:"Gratis",de:"Kostenlos"}},
      {chave:"economico",texto:{pt:"Econômico",en:"Budget-friendly",es:"Económico",de:"Preiswert"}},
      {chave:"moderado",texto:{pt:"Moderado",en:"Moderate",es:"Moderado",de:"Mittel"}},
      {chave:"tanto-faz",texto:{pt:"Tanto faz",en:"No preference",es:"Me da igual",de:"Egal"}}
    ]
  }
];

/* =====================================================
   ESTADO E FUNÇÕES COMPARTILHADAS
   ===================================================== */
let idioma = "pt";
let indice = 0;
let respostas = [];
let timerInatividade;
let ultimoRoteiro = "";
let ultimoDestinoNome = "";
let ultimoModo = "walking";

const $ = (seletor) => document.querySelector(seletor);
const telas = document.querySelectorAll(".tela");
const tr = (chave) => (TEXTOS[idioma] && TEXTOS[idioma][chave]) ?? TEXTOS.pt[chave] ?? chave;
const txt = (valor) => (typeof valor === "string" ? valor : (valor?.[idioma] ?? valor?.pt ?? ""));


function irPara(id) {
  telas.forEach((tela) => tela.classList.toggle("ativa", tela.id === id));
  const tela = document.getElementById(id);
  if (tela) tela.scrollTop = 0;
}

function aplicarIdioma() {
  document.documentElement.lang = LANG_HTML[idioma] || "pt-BR";
  document.querySelectorAll("[data-i18n]").forEach((elemento) => {
    elemento.textContent = tr(elemento.dataset.i18n);
  });
}

/* =====================================================
   QUESTIONÁRIO
   ===================================================== */
function iniciarQuestionario() {
  indice = 0;
  respostas = [];
  mostrarPergunta();
  irPara("tela-quiz");
}

function mostrarPergunta() {
  const pergunta = PERGUNTAS[indice];
  $("#quiz-contador").textContent = tr("contador")
    .replace("{n}", indice + 1)
    .replace("{total}", PERGUNTAS.length);
  $("#progresso-fill").style.width = `${((indice + 1) / PERGUNTAS.length) * 100}%`;
  $("#quiz-pergunta").textContent = txt(pergunta.texto);
  $("#quiz-subtitulo").textContent = pergunta.subtitulo ? txt(pergunta.subtitulo) : "";

  document.querySelectorAll("[data-alt]").forEach((botao) => {
    const alternativa = pergunta.alternativas[Number(botao.dataset.alt)];
    botao.textContent = alternativa ? txt(alternativa.texto) : "";
  });

  $("#quiz-voltar").textContent = tr(indice === 0 ? "voltarInicio" : "voltar");
}

function escolherAlternativa(numero) {
  respostas[indice] = numero;
  if (indice < PERGUNTAS.length - 1) {
    indice++;
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
}

function voltarPergunta() {
  if (indice === 0) {
    irPara("tela-inicial");
  } else {
    indice--;
    mostrarPergunta();
  }
}

/* =====================================================
   PONTUAÇÃO E SELEÇÃO DO DESTINO
   Pergunta 1: +3 para os destinos da região escolhida e -3 para os demais.
   Perguntas 2 a 6: +2 para cada resposta “Melhor”, -1 para “Pior” e 0 para neutras.
   Todos os 20 destinos continuam concorrendo à recomendação final.
   ===================================================== */
const CRITERIOS = ["companhia", "duracao", "transporte", "ambiente", "custo"];
const ZONAS_POR_RESPOSTA = ["Zona Norte", "Zona Sul", "Centro Hist.", "Zona Oeste"];
const NOMES_ZONA = {
  "Zona Norte": {pt:"Zona Norte",en:"North Zone",es:"Zona Norte",de:"Nordzone"},
  "Zona Sul": {pt:"Zona Sul",en:"South Zone",es:"Zona Sur",de:"Südzone"},
  "Zona Oeste": {pt:"Zona Oeste",en:"West Zone",es:"Zona Oeste",de:"Westzone"},
  "Centro Hist.": {pt:"Centro Histórico",en:"Historic Center",es:"Centro Histórico",de:"Historisches Zentrum"}
};

function calcularPontuacoes() {
  const zonaEscolhida = ZONAS_POR_RESPOSTA[respostas[0]];
  const avaliacoes = DESTINOS.map((destino) => {
    // A região influencia a pontuação, mas não elimina nenhum destino.
    let pontos = destino.zona === zonaEscolhida ? 3 : -3;

    // Mantém sem alteração a matriz Melhor/Pior das perguntas 2 a 6.
    CRITERIOS.forEach((criterio, i) => {
      const chave = PERGUNTAS[i + 1]?.alternativas[respostas[i + 1]]?.chave;
      if (!chave || chave === "tanto-faz") return;
      if (destino.melhor[criterio].includes(chave)) pontos += 2;
      else if (destino.pior[criterio].includes(chave)) pontos -= 1;
    });
    return {destino, pontos};
  });
  const maiorPontuacao = Math.max(...avaliacoes.map((item) => item.pontos));
  const empatados = avaliacoes.filter((item) => item.pontos === maiorPontuacao);
  const vencedor = empatados[Math.floor(Math.random() * empatados.length)];
  return {...vencedor, pontuacoes: avaliacoes, empate: empatados.length > 1};
}

/* =====================================================
   GOOGLE MAPS + QR CODE
   ===================================================== */
// Ponto de partida fixo para a demonstração do protótipo.
// Endereço confirmado na página oficial de infraestrutura da CESAR School.
const ORIGEM_MAPS = "-8.0596986,-34.8724827";

function montarLinkMaps(destino, modo = "walking") {
  const params = new URLSearchParams({
    api: "1",
    origin: ORIGEM_MAPS,
    destination: `${destino}, Recife - PE`,
    travelmode: modo
  });
  return `https://www.google.com/maps/dir/?${params.toString()}`;
}

function gerarQRCode(url) {
  const alvo = $("#qrcode");
  alvo.innerHTML = "";

  if (typeof QRCode === "undefined") {
    alvo.textContent = "QR Code indisponível";
    return;
  }

  // Mede a área já visível para manter o QR quadrado e nítido no layout vertical.
  const tamanho = Math.max(120, Math.floor(alvo.clientWidth || ($("#totem").clientWidth * 0.27)));
  new QRCode(alvo, {
    text: url,
    width: tamanho,
    height: tamanho,
    correctLevel: QRCode.CorrectLevel.M
  });
}

/* =====================================================
   RESULTADO — NOVO LAYOUT DO FIGMA
   ===================================================== */
function mostrarResultado() {
  const resultado = calcularPontuacoes();
  const destino = resultado.destino;
  const zona = NOMES_ZONA[destino.zona]?.[idioma] ?? destino.zona;
  const tagsDoIdioma = destino.tags[idioma] ?? destino.tags.pt;

  $("#res-titulo").textContent = destino.nome;
  $("#res-subtitulo").textContent = `${zona} · ${tagsDoIdioma[0]}`;
  $("#res-descricao").textContent = destino.descricao[idioma] ?? destino.descricao.pt;

  const tags = $("#res-tags");
  tags.replaceChildren();
  tagsDoIdioma.slice(0, 3).forEach((tag) => {
    const elemento = document.createElement("span");
    elemento.className = "res-tag";
    elemento.textContent = tag;
    tags.appendChild(elemento);
  });

  const chaveTransporte = PERGUNTAS[3].alternativas[respostas[3]]?.chave;
  const modos = {ape:"walking", bicicleta:"bicycling", carro:"driving", publico:"transit"};
  ultimoRoteiro = destino.id;
  ultimoDestinoNome = destino.nome;
  ultimoModo = modos[chaveTransporte] || "walking";

  irPara("tela-resultado");
  gerarQRCode(montarLinkMaps(destino.nome, ultimoModo));
}

/* =====================================================
   FEEDBACK LOCAL
   Guarda as avaliações neste navegador; nenhum servidor é necessário.
   ===================================================== */
const ROTULOS_FEEDBACK = {
  1: "Muito Insatisfeito(a)",
  2: "Insatisfeito(a)",
  3: "Satisfeito(a)",
  4: "Muito Satisfeito(a)"
};

function lerFeedbacks() {
  try {
    return JSON.parse(localStorage.getItem("alo_feedback") || "[]");
  } catch (erro) {
    console.warn("Não foi possível ler os feedbacks salvos.", erro);
    return [];
  }
}

function registrarFeedbackLocal(registro) {
  const lista = lerFeedbacks();
  if (!lista.some((item) => item.id === registro.id)) lista.push(registro);
  localStorage.setItem("alo_feedback", JSON.stringify(lista));
}

async function registrarFeedback(valor) {
  const avaliacao = valor === "skip" ? null : Number(valor);
  if (avaliacao !== null && !Object.prototype.hasOwnProperty.call(ROTULOS_FEEDBACK, avaliacao)) return;

  const respostasRegistradas = PERGUNTAS.map((pergunta, i) => ({
    pergunta: txt(pergunta.texto),
    resposta: txt(pergunta.alternativas[respostas[i]]?.texto)
  }));
  const registro = {
    id: globalThis.crypto?.randomUUID?.() || `alo-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    data: new Date().toISOString(),
    valor: avaliacao,
    avaliacao: avaliacao === null ? null : ROTULOS_FEEDBACK[avaliacao],
    status: avaliacao === null ? "nao_avaliou" : "avaliado",
    idioma,
    destino: ultimoDestinoNome,
    destinoId: ultimoRoteiro,
    transporte: ultimoModo,
    respostas: respostasRegistradas
  };

  // Tenta gravar no arquivo JSON do servidor Python. Se a aplicação estiver
  // aberta por Live Server/file://, a cópia local do navegador continua valendo.
  try {
    const resposta = await fetch("/api/feedback", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(registro)
    });
    if (!resposta.ok) throw new Error(`Servidor respondeu ${resposta.status}`);
  } catch (erro) {
    console.info("Servidor de feedback indisponível; mantendo registro local.", erro);
  }

  try {
    registrarFeedbackLocal(registro);
  } catch (erro) {
    console.warn("Não foi possível salvar a cópia local do feedback.", erro);
  }
  return registro;
}

async function obterTodosFeedbacks() {
  const locais = lerFeedbacks();
  try {
    const resposta = await fetch("/api/feedback");
    if (!resposta.ok) throw new Error(`Servidor respondeu ${resposta.status}`);
    const remotos = await resposta.json();
    const porId = new Map([...remotos, ...locais].map((item) => [item.id, item]));
    return [...porId.values()].sort((a, b) => a.data.localeCompare(b.data));
  } catch (erro) {
    return locais;
  }
}

async function exportarFeedbacks() {
  const registros = await obterTodosFeedbacks();
  const arquivo = new Blob([JSON.stringify(registros, null, 2)], {type:"application/json"});
  const url = URL.createObjectURL(arquivo);
  const link = document.createElement("a");
  link.href = url;
  link.download = `alo-recife-feedback-${new Date().toISOString().slice(0,10)}.json`;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

// Consulta e exportação de avaliações pelo console do navegador.
window.aloRecifeFeedback = {
  ler: lerFeedbacks,
  lerTudo: obterTodosFeedbacks,
  exportar: exportarFeedbacks
};

/* =====================================================
   REINÍCIO E TEMPO DE INATIVIDADE
   ===================================================== */
function reiniciar() {
  idioma = "pt";
  indice = 0;
  respostas = [];
  ultimoRoteiro = "";
  ultimoDestinoNome = "";
  ultimoModo = "walking";
  aplicarIdioma();
  irPara("tela-inicial");
}

function zerarTimer() {
  clearTimeout(timerInatividade);
  timerInatividade = setTimeout(reiniciar, TEMPO_INATIVIDADE);
}

/* =====================================================
   EVENTOS DE INTERAÇÃO
   ===================================================== */
$("#btn-onde-ir").addEventListener("click", iniciarQuestionario);
$("#btn-idiomas").addEventListener("click", () => irPara("tela-idioma"));
$("#btn-sobre").addEventListener("click", () => irPara("tela-sobre"));

document.querySelectorAll("[data-idioma]").forEach((botao) => {
  botao.addEventListener("click", () => {
    idioma = botao.dataset.idioma;
    aplicarIdioma();
    irPara("tela-inicial");
  });
});

$("#idioma-voltar").addEventListener("click", () => irPara("tela-inicial"));
$("#sobre-voltar").addEventListener("click", () => irPara("tela-inicial"));

document.querySelectorAll("[data-alt]").forEach((botao) => {
  botao.addEventListener("click", () => escolherAlternativa(Number(botao.dataset.alt)));
});
$("#quiz-voltar").addEventListener("click", voltarPergunta);
$("#btn-encerrar").addEventListener("click", () => irPara("tela-feedback"));

document.querySelectorAll("[data-feedback]").forEach((botao) => {
  botao.addEventListener("click", async () => {
    botao.disabled = true;
    try {
      await registrarFeedback(botao.dataset.feedback);
    } finally {
      reiniciar();
    }
  });
});

// A animação move cada conjunto como uma peça: círculo + ligação física.
document.querySelectorAll(".feedback-grupo").forEach((grupo) => {
  const botao = grupo.querySelector("button");
  botao.addEventListener("pointerdown", () => grupo.classList.add("pressionado"));
  ["pointerup", "pointercancel", "pointerleave", "blur"].forEach((evento) => {
    botao.addEventListener(evento, () => grupo.classList.remove("pressionado"));
  });
  botao.addEventListener("keydown", (evento) => {
    if (evento.key === "Enter" || evento.key === " ") grupo.classList.add("pressionado");
  });
  botao.addEventListener("keyup", () => grupo.classList.remove("pressionado"));
});

["pointerdown", "keydown"].forEach((evento) => {
  document.addEventListener(evento, zerarTimer);
});

aplicarIdioma();
zerarTimer();
