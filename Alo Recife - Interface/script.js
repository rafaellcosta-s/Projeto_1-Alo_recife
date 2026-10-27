/* =====================================================
   ALÔ RECIFE — INTERFACE E LÓGICA DO PROTÓTIPO
   Textos, perguntas e roteiros de exemplo podem ser ajustados
   depois da pesquisa e da validação do grupo.
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
    sobreP1: "Aqui vai o texto de apresentação do projeto Alô Recife: quem somos, qual é a proposta e como o roteiro é escolhido para cada visitante.",
    sobreP2: "Use um parágrafo para cada ideia. O texto se ajusta ao espaço da tela.",
    ondeIr: "Para onde ir hoje?", idiomas: "Idiomas", sobre: "Sobre nós",
    selecioneIdioma: "Selecione seu idioma",
    voltarInicio: "Voltar à tela inicial", voltar: "Voltar",
    contador: "Pergunta {n} de {total}",
    seuPasseio: "Seu passeio ideal",
    ingressoLabel: "Ingresso:",
    horarioFuncionamento: "Horário de funcionamento:",
    rotaCta: "Confira a rota para seu destino",
    encerrar: "Encerrar",
    feedbackTitulo: "Como foi sua experiência com o totemfone?",
    muitoPositiva: "Muito positiva", positiva: "Positiva", neutra: "Neutra",
    negativa: "Negativa", muitoNegativa: "Muito negativa", naoAvaliar: "Não avaliar"
  },
  en: {
    tagline: "Discover Recife your way!",
    sobreP1: "This is where the Alô Recife project introduction goes: who we are, what the proposal is and how the itinerary is chosen for each visitor.",
    sobreP2: "Use one paragraph for each idea. The text adjusts to the screen space.",
    ondeIr: "Where to go today?", idiomas: "Languages", sobre: "About us",
    selecioneIdioma: "Select your language",
    voltarInicio: "Back to home screen", voltar: "Back",
    contador: "Question {n} of {total}",
    seuPasseio: "Your ideal tour",
    ingressoLabel: "Admission:",
    horarioFuncionamento: "Opening hours:",
    rotaCta: "Check the route to your destination",
    encerrar: "Finish",
    feedbackTitulo: "How was your experience with the Totemfone?",
    muitoPositiva: "Very positive", positiva: "Positive", neutra: "Neutral",
    negativa: "Negative", muitoNegativa: "Very negative", naoAvaliar: "Skip"
  },
  es: {
    tagline: "¡Descubre Recife a tu manera!",
    sobreP1: "Aquí va el texto de presentación del proyecto Alô Recife: quiénes somos, cuál es la propuesta y cómo se elige el itinerario para cada visitante.",
    sobreP2: "Usa un párrafo para cada idea. El texto se ajusta al espacio de la pantalla.",
    ondeIr: "¿A dónde ir hoy?", idiomas: "Idiomas", sobre: "Sobre nosotros",
    selecioneIdioma: "Selecciona tu idioma",
    voltarInicio: "Volver a la pantalla de inicio", voltar: "Volver",
    contador: "Pregunta {n} de {total}",
    seuPasseio: "Tu paseo ideal",
    ingressoLabel: "Entrada:",
    horarioFuncionamento: "Horario de funcionamiento:",
    rotaCta: "Consulta la ruta a tu destino",
    encerrar: "Finalizar",
    feedbackTitulo: "¿Cómo fue tu experiencia con el Totemfone?",
    muitoPositiva: "Muy positiva", positiva: "Positiva", neutra: "Neutra",
    negativa: "Negativa", muitoNegativa: "Muy negativa", naoAvaliar: "No evaluar"
  },
  de: {
    tagline: "Entdecke Recife auf deine Art!",
    sobreP1: "Hier steht der Vorstellungstext des Projekts Alô Recife: wer wir sind, was unser Vorschlag ist und wie die Route für jeden Besucher ausgewählt wird.",
    sobreP2: "Verwende für jede Idee einen eigenen Absatz. Der Text passt sich dem Platz auf dem Bildschirm an.",
    ondeIr: "Wohin heute?", idiomas: "Sprachen", sobre: "Über uns",
    selecioneIdioma: "Wähle deine Sprache",
    voltarInicio: "Zurück zum Startbildschirm", voltar: "Zurück",
    contador: "Frage {n} von {total}",
    seuPasseio: "Dein idealer Ausflug",
    ingressoLabel: "Eintritt:",
    horarioFuncionamento: "Öffnungszeiten:",
    rotaCta: "Route zum Ziel ansehen",
    encerrar: "Beenden",
    feedbackTitulo: "Wie war deine Erfahrung mit dem Totemfone?",
    muitoPositiva: "Sehr positiv", positiva: "Positiv", neutra: "Neutral",
    negativa: "Negativ", muitoNegativa: "Sehr negativ", naoAvaliar: "Nicht bewerten"
  }
};

/* =====================================================
   ROTEIROS DE EXEMPLO
   O ponto em destaque preenche a nova tela de resultados;
   todas as paradas são usadas para montar o link do Google Maps.
   Confirmem preços e horários durante a pesquisa do grupo.
   ===================================================== */
const ROTEIROS = [
  {
    id: "historico",
    nome: {
      pt: "Recife Antigo e Centro Histórico",
      en: "Old Recife and Historic Center",
      es: "Recife Antiguo y Centro Histórico",
      de: "Altstadt und historisches Zentrum von Recife"
    },
    tipo: {
      pt: "Histórico, a pé, ideal para curiosos",
      en: "Historical, on foot, ideal for the curious",
      es: "Histórico, a pie, ideal para curiosos",
      de: "Historisch, zu Fuß, ideal für Neugierige"
    },
    porque: {
      pt: "Reúne ruas e prédios históricos, museus e a cultura do frevo em um trajeto curto.",
      en: "Brings together historic streets and buildings, museums and frevo culture on a short route.",
      es: "Reúne calles y edificios históricos, museos y la cultura del frevo en un recorrido corto.",
      de: "Verbindet historische Straßen und Gebäude, Museen und die Frevo-Kultur auf einer kurzen Route."
    },
    destino: { pt: "Paço do Frevo", en: "Paço do Frevo", es: "Paço do Frevo", de: "Paço do Frevo" },
    subtituloDestino: {
      pt: "Centro Histórico - Museu",
      en: "Historic Center - Museum",
      es: "Centro Histórico - Museo",
      de: "Historisches Zentrum - Museum"
    },
    tags: [
      { pt: "cultural", en: "cultural", es: "cultural", de: "kulturell" },
      { pt: "histórico", en: "historic", es: "histórico", de: "historisch" },
      { pt: "ambiente fechado", en: "indoor", es: "espacio cerrado", de: "Innenbereich" }
    ],
    ingresso: {
      pt: "R$10,00 / R$5,00 (meia entrada)",
      en: "R$10.00 / R$5.00 (reduced admission)",
      es: "R$10,00 / R$5,00 (entrada reducida)",
      de: "R$10,00 / R$5,00 (ermäßigter Eintritt)"
    },
    notaIngresso: {
      pt: "*Essa informação pode variar de acordo com a data; confirme antes da visita.",
      en: "*This information may vary by date; please confirm before visiting.",
      es: "*Esta información puede variar según la fecha; confirma antes de la visita.",
      de: "*Diese Angaben können je nach Datum variieren; bitte vor dem Besuch bestätigen."
    },
    horarios: {
      pt: "Horários a confirmar após a pesquisa do grupo.",
      en: "Opening hours to be confirmed after the group's research.",
      es: "Horario por confirmar después de la investigación del grupo.",
      de: "Öffnungszeiten werden nach der Recherche der Gruppe bestätigt."
    },
    paradas: ["Marco Zero", "Rua do Bom Jesus", "Paço do Frevo", "Cais do Sertão"]
  },
  {
    id: "arte",
    nome: {
      pt: "Arte e Cultura",
      en: "Art and Culture",
      es: "Arte y Cultura",
      de: "Kunst und Kultur"
    },
    tipo: {
      pt: "Arte e cultura, ideal para casais e grupos pequenos",
      en: "Art and culture, ideal for couples and small groups",
      es: "Arte y cultura, ideal para parejas y grupos pequeños",
      de: "Kunst und Kultur, ideal für Paare und kleine Gruppen"
    },
    porque: {
      pt: "Combina ateliês e museus para quem quer ver arte com calma.",
      en: "Combines studios and museums for those who want to see art at a relaxed pace.",
      es: "Combina talleres y museos para quien quiere ver arte con calma.",
      de: "Verbindet Ateliers und Museen für alle, die Kunst in Ruhe erleben möchten."
    },
    destino: {
      pt: "Oficina Francisco Brennand",
      en: "Oficina Francisco Brennand",
      es: "Oficina Francisco Brennand",
      de: "Oficina Francisco Brennand"
    },
    subtituloDestino: {
      pt: "Várzea - Arte e cultura",
      en: "Várzea - Art and culture",
      es: "Várzea - Arte y cultura",
      de: "Várzea - Kunst und Kultur"
    },
    tags: [
      { pt: "cultural", en: "cultural", es: "cultural", de: "kulturell" },
      { pt: "arte", en: "art", es: "arte", de: "Kunst" },
      { pt: "ambiente aberto", en: "outdoors", es: "al aire libre", de: "im Freien" }
    ],
    ingresso: {
      pt: "A confirmar após a pesquisa",
      en: "To be confirmed after research",
      es: "Por confirmar tras la investigación",
      de: "Nach der Recherche zu bestätigen"
    },
    notaIngresso: {
      pt: "*Valores e condições de visita serão confirmados pelo grupo.",
      en: "*Admission prices and visitor information will be confirmed by the group.",
      es: "*El grupo confirmará los precios y las condiciones de visita.",
      de: "*Eintrittspreise und Besuchsbedingungen werden von der Gruppe bestätigt."
    },
    horarios: {
      pt: "Horários a confirmar após a pesquisa do grupo.",
      en: "Opening hours to be confirmed after the group's research.",
      es: "Horario por confirmar después de la investigación del grupo.",
      de: "Öffnungszeiten werden nach der Recherche der Gruppe bestätigt."
    },
    paradas: ["Oficina Francisco Brennand", "Instituto Ricardo Brennand", "Museu do Estado de Pernambuco"]
  },
  {
    id: "natureza",
    nome: {
      pt: "Praia e Parques",
      en: "Beach and Parks",
      es: "Playa y Parques",
      de: "Strand und Parks"
    },
    tipo: {
      pt: "Ao ar livre, ideal para famílias",
      en: "Outdoors, ideal for families",
      es: "Al aire libre, ideal para familias",
      de: "Im Freien, ideal für Familien"
    },
    porque: {
      pt: "Alterna áreas verdes e orla, com tempo livre para descansar.",
      en: "Alternates green areas and the waterfront, with free time to rest.",
      es: "Alterna zonas verdes y el paseo marítimo, con tiempo libre para descansar.",
      de: "Wechselt zwischen Grünanlagen und Strandpromenade, mit freier Zeit zum Ausruhen."
    },
    destino: {
      pt: "Praia de Boa Viagem",
      en: "Boa Viagem Beach",
      es: "Playa de Boa Viagem",
      de: "Strand von Boa Viagem"
    },
    subtituloDestino: {
      pt: "Zona Sul - Praia",
      en: "South Zone - Beach",
      es: "Zona Sur - Playa",
      de: "Südzone - Strand"
    },
    tags: [
      { pt: "praia", en: "beach", es: "playa", de: "Strand" },
      { pt: "natureza", en: "nature", es: "naturaleza", de: "Natur" },
      { pt: "ambiente aberto", en: "outdoors", es: "al aire libre", de: "im Freien" }
    ],
    ingresso: {
      pt: "A confirmar após a pesquisa",
      en: "To be confirmed after research",
      es: "Por confirmar tras la investigación",
      de: "Nach der Recherche zu bestätigen"
    },
    notaIngresso: {
      pt: "*Condições de acesso e serviços serão confirmados pelo grupo.",
      en: "*Access conditions and services will be confirmed by the group.",
      es: "*El grupo confirmará las condiciones de acceso y los servicios.",
      de: "*Zugang und Dienstleistungen werden von der Gruppe bestätigt."
    },
    horarios: {
      pt: "Informações de visita a confirmar após a pesquisa do grupo.",
      en: "Visitor information to be confirmed after the group's research.",
      es: "Información de visita por confirmar después de la investigación del grupo.",
      de: "Besuchsinformationen werden nach der Recherche der Gruppe bestätigt."
    },
    paradas: ["Parque Dona Lindu", "Praia de Boa Viagem", "Parque das Esculturas"]
  }
];

/* =====================================================
   PERGUNTAS — EXEMPLOS PROVISÓRIOS
   A pergunta 1 segue o texto mostrado no Figma revisado.
   As demais ainda são exemplos e serão definidas pelo grupo.
   ===================================================== */
const PERGUNTAS = [
  {
    texto: {
      pt: "Qual região de Recife?",
      en: "Which area of Recife?",
      es: "¿Qué zona de Recife?",
      de: "Welche Gegend von Recife?"
    },
    subtitulo: {
      pt: "Escolha onde será o seu passeio",
      en: "Choose the area for your outing",
      es: "Elige la zona para tu paseo",
      de: "Wähle die Gegend für deinen Ausflug"
    },
    alternativas: [
      { texto: { pt: "Zona Norte", en: "North Zone", es: "Zona Norte", de: "Nordzone" }, pontos: { arte: 2 } },
      { texto: { pt: "Zona Sul", en: "South Zone", es: "Zona Sur", de: "Südzone" }, pontos: { natureza: 3 } },
      { texto: { pt: "Centro Hist.", en: "Historic Center", es: "Centro Hist.", de: "Historisches Zentrum" }, pontos: { historico: 3 } },
      { texto: { pt: "Alternativa", en: "Other", es: "Otra", de: "Andere" }, pontos: { historico: 1, arte: 1, natureza: 1 } }
    ]
  },
  {
    texto: { pt: "Com quem você está passeando?", en: "Who are you sightseeing with?", es: "¿Con quién estás paseando?", de: "Mit wem bist du unterwegs?" },
    alternativas: [
      { texto: { pt: "Sozinho(a)", en: "Alone", es: "Solo(a)", de: "Allein" }, pontos: { historico: 1, arte: 1 } },
      { texto: { pt: "Em família", en: "With family", es: "En familia", de: "Mit der Familie" }, pontos: { natureza: 2 } },
      { texto: { pt: "Com amigos", en: "With friends", es: "Con amigos", de: "Mit Freunden" }, pontos: { historico: 1, natureza: 1 } },
      { texto: { pt: "Em casal", en: "As a couple", es: "En pareja", de: "Als Paar" }, pontos: { arte: 2 } }
    ]
  },
  {
    texto: { pt: "Quanto tempo você tem?", en: "How much time do you have?", es: "¿Cuánto tiempo tienes?", de: "Wie viel Zeit hast du?" },
    alternativas: [
      { texto: { pt: "1 a 2 horas", en: "1 to 2 hours", es: "1 a 2 horas", de: "1 bis 2 Stunden" }, pontos: { historico: 2 } },
      { texto: { pt: "Meio dia", en: "Half a day", es: "Medio día", de: "Einen halben Tag" }, pontos: { arte: 2 } },
      { texto: { pt: "O dia todo", en: "The whole day", es: "Todo el día", de: "Den ganzen Tag" }, pontos: { natureza: 2 } },
      { texto: { pt: "Ainda não sei", en: "Not sure yet", es: "Aún no lo sé", de: "Weiß ich noch nicht" }, pontos: { historico: 1 } }
    ]
  },
  {
    texto: { pt: "Como prefere se deslocar?", en: "How do you prefer to get around?", es: "¿Cómo prefieres desplazarte?", de: "Wie möchtest du dich fortbewegen?" },
    alternativas: [
      { texto: { pt: "A pé", en: "On foot", es: "A pie", de: "Zu Fuß" }, pontos: { historico: 2 } },
      { texto: { pt: "De carro", en: "By car", es: "En coche", de: "Mit dem Auto" }, pontos: { arte: 2 } },
      { texto: { pt: "Transporte público", en: "Public transport", es: "Transporte público", de: "Öffentliche Verkehrsmittel" }, pontos: { historico: 1, natureza: 1 } },
      { texto: { pt: "De bicicleta", en: "By bike", es: "En bicicleta", de: "Mit dem Fahrrad" }, pontos: { natureza: 2 } }
    ]
  },
  {
    texto: { pt: "Qual ambiente você prefere?", en: "Which setting do you prefer?", es: "¿Qué ambiente prefieres?", de: "Welche Umgebung bevorzugst du?" },
    alternativas: [
      { texto: { pt: "Ruas históricas", en: "Historic streets", es: "Calles históricas", de: "Historische Straßen" }, pontos: { historico: 2 } },
      { texto: { pt: "Museus", en: "Museums", es: "Museos", de: "Museen" }, pontos: { arte: 2 } },
      { texto: { pt: "Parques", en: "Parks", es: "Parques", de: "Parks" }, pontos: { natureza: 2 } },
      { texto: { pt: "Praia", en: "Beach", es: "Playa", de: "Strand" }, pontos: { natureza: 3 } }
    ]
  },
  {
    texto: { pt: "Quanto quer gastar?", en: "How much do you want to spend?", es: "¿Cuánto quieres gastar?", de: "Wie viel möchtest du ausgeben?" },
    alternativas: [
      { texto: { pt: "Gratuito", en: "Free", es: "Gratis", de: "Kostenlos" }, pontos: { natureza: 2, historico: 1 } },
      { texto: { pt: "Pouco", en: "A little", es: "Poco", de: "Wenig" }, pontos: { historico: 1, arte: 1 } },
      { texto: { pt: "Moderado", en: "Moderate", es: "Moderado", de: "Moderat" }, pontos: { arte: 2 } },
      { texto: { pt: "Tanto faz", en: "Doesn't matter", es: "Me da igual", de: "Egal" }, pontos: {} }
    ]
  },
  {
    texto: { pt: "Você precisa de acessibilidade?", en: "Do you need accessibility features?", es: "¿Necesitas accesibilidad?", de: "Brauchst du Barrierefreiheit?" },
    alternativas: [
      { texto: { pt: "Sim", en: "Yes", es: "Sí", de: "Ja" }, pontos: {}, acessibilidade: true },
      { texto: { pt: "Não", en: "No", es: "No", de: "Nein" }, pontos: {} }
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
let ultimoModo = "walking";

const $ = (seletor) => document.querySelector(seletor);
const telas = document.querySelectorAll(".tela");
const tr = (chave) => (TEXTOS[idioma] && TEXTOS[idioma][chave]) ?? TEXTOS.pt[chave] ?? chave;
const txt = (valor) => (typeof valor === "string" ? valor : (valor?.[idioma] ?? valor?.pt ?? ""));
const MODOS = ["walking", "driving", "transit", "bicycling"];
const PERGUNTA_TRANSPORTE = 3; // pergunta 4, índice 3, é a de transporte.

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
    // Perguntas com menos de 4 opções (ex.: Sim/Não) escondem os botões sem uso.
    botao.style.visibility = alternativa ? "visible" : "hidden";
    botao.style.pointerEvents = alternativa ? "auto" : "none";
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
   PONTUAÇÃO E SELEÇÃO DO ROTEIRO
   ===================================================== */
function calcularVencedor() {
  const total = Object.fromEntries(ROTEIROS.map((roteiro) => [roteiro.id, 0]));
  respostas.forEach((numero, i) => {
    const pontos = PERGUNTAS[i]?.alternativas[numero]?.pontos || {};
    for (const id in pontos) {
      if (Object.prototype.hasOwnProperty.call(total, id)) total[id] += pontos[id];
    }
  });
  return ROTEIROS.reduce(
    (melhor, roteiro) => (total[roteiro.id] > total[melhor.id] ? roteiro : melhor),
    ROTEIROS[0]
  );
}

/* =====================================================
   GOOGLE MAPS + QR CODE
   ===================================================== */
const nomeParada = (parada) => (typeof parada === "string" ? parada : parada.nome);
const localParada = (parada) => (typeof parada === "string" ? `${parada}, Recife - PE` : (parada.local || `${parada.nome}, Recife - PE`));

function montarLinkMaps(paradas, modo = "walking") {
  const lugares = paradas.map(localParada);
  if (!lugares.length) return "https://www.google.com/maps";

  const params = new URLSearchParams({
    api: "1",
    origin: lugares[0],
    destination: lugares[lugares.length - 1],
    travelmode: modo
  });
  if (lugares.length > 2) {
    params.set("waypoints", lugares.slice(1, -1).slice(0, 9).join("|"));
  }
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
  const roteiro = calcularVencedor();
  $("#res-titulo").textContent = txt(roteiro.destino || roteiro.nome);
  $("#res-subtitulo").textContent = txt(roteiro.subtituloDestino || roteiro.tipo);
  $("#res-ingresso").textContent = txt(roteiro.ingresso);
  $("#res-aviso-ingresso").textContent = txt(roteiro.notaIngresso);
  $("#res-horarios").textContent = txt(roteiro.horarios);

  const tags = $("#res-tags");
  tags.replaceChildren();
  (roteiro.tags || []).forEach((tag) => {
    const elemento = document.createElement("span");
    elemento.className = "res-tag";
    elemento.textContent = txt(tag);
    tags.appendChild(elemento);
  });

  const modo = MODOS[respostas[PERGUNTA_TRANSPORTE]] || "walking";
  ultimoRoteiro = roteiro.id;
  ultimoModo = modo;

  irPara("tela-resultado");
  gerarQRCode(montarLinkMaps(roteiro.paradas, modo));
}

/* =====================================================
   FEEDBACK LOCAL
   Guarda as avaliações neste navegador; nenhum servidor é necessário.
   ===================================================== */
function registrarFeedback(valor) {
  const registro = {
    data: new Date().toISOString(),
    valor,
    idioma,
    roteiro: ultimoRoteiro,
    transporte: ultimoModo,
    respostas: respostas.map((numero) => numero + 1).join("")
  };

  try {
    const lista = JSON.parse(localStorage.getItem("alo_feedback") || "[]");
    lista.push(registro);
    localStorage.setItem("alo_feedback", JSON.stringify(lista));
  } catch (erro) {
    // A interface continua funcional mesmo se o navegador bloquear localStorage.
    console.info("Feedback da demonstração:", registro);
  }
}

/* =====================================================
   REINÍCIO E TEMPO DE INATIVIDADE
   ===================================================== */
function reiniciar() {
  idioma = "pt";
  indice = 0;
  respostas = [];
  ultimoRoteiro = "";
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
  botao.addEventListener("click", () => {
    registrarFeedback(botao.dataset.feedback);
    reiniciar();
  });
});

["pointerdown", "keydown"].forEach((evento) => {
  document.addEventListener(evento, zerarTimer);
});

aplicarIdioma();
zerarTimer();
