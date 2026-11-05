/* Catálogo de 20 destinos; critérios transcritos da planilha do grupo. */
const DESTINOS = [
  {
    "id": "parque-santana",
    "nome": "Parque Santana",
    "zona": "Zona Norte",
    "descricao": {
      "pt": "Um passeio ao ar livre para caminhar, descansar e aproveitar áreas verdes na Zona Norte.",
      "en": "An outdoor stop for walking, relaxing and enjoying green spaces in Recife’s North Zone.",
      "es": "Un paseo al aire libre para caminar, descansar y disfrutar de zonas verdes en el norte de Recife.",
      "de": "Ein Ausflug ins Grüne zum Spazieren, Entspannen und Genießen der Grünflächen im Norden Recifes."
    },
    "tags": {
      "pt": [
        "Natureza",
        "Ao ar livre",
        "Lazer"
      ],
      "en": [
        "Nature",
        "Outdoors",
        "Leisure"
      ],
      "es": [
        "Naturaleza",
        "Al aire libre",
        "Ocio"
      ],
      "de": [
        "Natur",
        "Im Freien",
        "Freizeit"
      ]
    },
    "melhor": {
      "companhia": [
        "amigos",
        "familia"
      ],
      "duracao": [
        "1-2"
      ],
      "transporte": [
        "bicicleta",
        "carro"
      ],
      "ambiente": [
        "natureza"
      ],
      "custo": [
        "gratis"
      ]
    },
    "pior": {
      "companhia": [
        "sozinho"
      ],
      "duracao": [
        "mais-6"
      ],
      "transporte": [
        "publico"
      ],
      "ambiente": [
        "religioso"
      ],
      "custo": [
        "moderado"
      ]
    }
  },
  {
    "id": "parque-dois-irmaos",
    "nome": "Parque Dois Irmãos",
    "zona": "Zona Norte",
    "descricao": {
      "pt": "Um passeio em meio à natureza, ideal para dedicar algumas horas a um ambiente verde.",
      "en": "A nature-focused outing, ideal for spending a few hours surrounded by greenery.",
      "es": "Una salida en contacto con la naturaleza, ideal para pasar unas horas entre áreas verdes.",
      "de": "Ein Ausflug in die Natur, ideal, um einige Stunden im Grünen zu verbringen."
    },
    "tags": {
      "pt": [
        "Natureza",
        "Família",
        "Ao ar livre"
      ],
      "en": [
        "Nature",
        "Family",
        "Outdoors"
      ],
      "es": [
        "Naturaleza",
        "Familia",
        "Al aire libre"
      ],
      "de": [
        "Natur",
        "Familie",
        "Im Freien"
      ]
    },
    "melhor": {
      "companhia": [
        "amigos",
        "familia"
      ],
      "duracao": [
        "2-4"
      ],
      "transporte": [
        "carro",
        "publico"
      ],
      "ambiente": [
        "natureza"
      ],
      "custo": [
        "economico"
      ]
    },
    "pior": {
      "companhia": [
        "sozinho"
      ],
      "duracao": [
        "1-2"
      ],
      "transporte": [
        "ape",
        "bicicleta"
      ],
      "ambiente": [
        "religioso"
      ],
      "custo": [
        "moderado"
      ]
    }
  },
  {
    "id": "parque-jaqueira",
    "nome": "Parque da Jaqueira",
    "zona": "Zona Norte",
    "descricao": {
      "pt": "Um refúgio urbano para caminhar, relaxar e aproveitar um espaço verde na cidade.",
      "en": "An urban green space for walking, unwinding and enjoying a break in the city.",
      "es": "Un espacio verde urbano para caminar, relajarse y disfrutar de una pausa en la ciudad.",
      "de": "Eine grüne Oase in der Stadt zum Spazierengehen, Entspannen und Durchatmen."
    },
    "tags": {
      "pt": [
        "Natureza",
        "Caminhada",
        "Lazer"
      ],
      "en": [
        "Nature",
        "Walking",
        "Leisure"
      ],
      "es": [
        "Naturaleza",
        "Caminata",
        "Ocio"
      ],
      "de": [
        "Natur",
        "Spaziergang",
        "Freizeit"
      ]
    },
    "melhor": {
      "companhia": [
        "casal",
        "familia"
      ],
      "duracao": [
        "1-2"
      ],
      "transporte": [
        "ape",
        "bicicleta"
      ],
      "ambiente": [
        "natureza"
      ],
      "custo": [
        "gratis"
      ]
    },
    "pior": {
      "companhia": [
        "sozinho"
      ],
      "duracao": [
        "mais-6"
      ],
      "transporte": [
        "publico"
      ],
      "ambiente": [
        "religioso"
      ],
      "custo": [
        "moderado"
      ]
    }
  },
  {
    "id": "museu-homem-nordeste",
    "nome": "Museu do Homem do Nordeste",
    "zona": "Zona Norte",
    "descricao": {
      "pt": "Conheça aspectos da formação cultural do Nordeste em uma visita de perfil histórico e educativo.",
      "en": "Explore aspects of Northeastern Brazil’s cultural heritage through a historical and educational visit.",
      "es": "Conoce aspectos de la formación cultural del Nordeste en una visita histórica y educativa.",
      "de": "Entdecke Aspekte des kulturellen Erbes Nordostbrasiliens bei einem historischen und lehrreichen Besuch."
    },
    "tags": {
      "pt": [
        "Cultura",
        "História",
        "Museu"
      ],
      "en": [
        "Culture",
        "History",
        "Museum"
      ],
      "es": [
        "Cultura",
        "Historia",
        "Museo"
      ],
      "de": [
        "Kultur",
        "Geschichte",
        "Museum"
      ]
    },
    "melhor": {
      "companhia": [
        "sozinho",
        "casal"
      ],
      "duracao": [
        "2-4"
      ],
      "transporte": [
        "carro",
        "publico"
      ],
      "ambiente": [
        "museus"
      ],
      "custo": [
        "economico",
        "gratis"
      ]
    },
    "pior": {
      "companhia": [
        "amigos"
      ],
      "duracao": [
        "mais-6"
      ],
      "transporte": [
        "ape"
      ],
      "ambiente": [
        "natureza"
      ],
      "custo": [
        "moderado"
      ]
    }
  },
  {
    "id": "santuario-conceicao",
    "nome": "Santuário Nossa Senhora da Conceição",
    "zona": "Zona Norte",
    "descricao": {
      "pt": "Um destino de tranquilidade e contemplação para quem deseja incluir uma visita religiosa no passeio.",
      "en": "A peaceful place for reflection and for including a religious visit in your outing.",
      "es": "Un lugar de tranquilidad y contemplación para incluir una visita religiosa en el paseo.",
      "de": "Ein ruhiger Ort der Besinnung für alle, die einen religiösen Besuch einplanen möchten."
    },
    "tags": {
      "pt": [
        "Religiosidade",
        "Contemplação",
        "Cultura"
      ],
      "en": [
        "Religion",
        "Reflection",
        "Culture"
      ],
      "es": [
        "Religiosidad",
        "Contemplación",
        "Cultura"
      ],
      "de": [
        "Religion",
        "Besinnung",
        "Kultur"
      ]
    },
    "melhor": {
      "companhia": [
        "sozinho",
        "familia"
      ],
      "duracao": [
        "1-2"
      ],
      "transporte": [
        "carro",
        "publico"
      ],
      "ambiente": [
        "religioso"
      ],
      "custo": [
        "gratis"
      ]
    },
    "pior": {
      "companhia": [
        "amigos"
      ],
      "duracao": [
        "mais-6"
      ],
      "transporte": [
        "bicicleta"
      ],
      "ambiente": [
        "natureza"
      ],
      "custo": [
        "moderado"
      ]
    }
  },
  {
    "id": "parque-dona-lindu",
    "nome": "Parque Dona Lindu",
    "zona": "Zona Sul",
    "descricao": {
      "pt": "Espaço ao ar livre na Zona Sul para passear, apreciar a paisagem e curtir momentos de lazer.",
      "en": "An outdoor space in the South Zone for strolling, enjoying the scenery and taking a break.",
      "es": "Un espacio al aire libre en la zona sur para pasear, disfrutar del paisaje y descansar.",
      "de": "Ein Freiluftbereich im Süden Recifes zum Flanieren, Landschaftgenießen und Entspannen."
    },
    "tags": {
      "pt": [
        "Natureza",
        "Lazer",
        "Ao ar livre"
      ],
      "en": [
        "Nature",
        "Leisure",
        "Outdoors"
      ],
      "es": [
        "Naturaleza",
        "Ocio",
        "Al aire libre"
      ],
      "de": [
        "Natur",
        "Freizeit",
        "Im Freien"
      ]
    },
    "melhor": {
      "companhia": [
        "familia",
        "amigos"
      ],
      "duracao": [
        "1-2"
      ],
      "transporte": [
        "ape",
        "carro"
      ],
      "ambiente": [
        "natureza"
      ],
      "custo": [
        "gratis"
      ]
    },
    "pior": {
      "companhia": [
        "sozinho"
      ],
      "duracao": [
        "mais-6"
      ],
      "transporte": [
        "bicicleta"
      ],
      "ambiente": [
        "religioso"
      ],
      "custo": [
        "moderado"
      ]
    }
  },
  {
    "id": "segundo-jardim-boa-viagem",
    "nome": "2º Jardim de Boa Viagem",
    "zona": "Zona Sul",
    "descricao": {
      "pt": "Trecho da orla para uma pausa ao ar livre, com caminhada e clima de praia.",
      "en": "A seafront spot for an outdoor break, a walk and a beachside atmosphere.",
      "es": "Un tramo del paseo marítimo para descansar al aire libre, caminar y disfrutar del ambiente de playa.",
      "de": "Ein Abschnitt der Strandpromenade für eine Pause im Freien und einen Spaziergang am Meer."
    },
    "tags": {
      "pt": [
        "Orla",
        "Caminhada",
        "Ao ar livre"
      ],
      "en": [
        "Seafront",
        "Walking",
        "Outdoors"
      ],
      "es": [
        "Paseo marítimo",
        "Caminata",
        "Al aire libre"
      ],
      "de": [
        "Strandpromenade",
        "Spaziergang",
        "Im Freien"
      ]
    },
    "melhor": {
      "companhia": [
        "familia",
        "casal"
      ],
      "duracao": [
        "1-2"
      ],
      "transporte": [
        "ape",
        "bicicleta"
      ],
      "ambiente": [
        "natureza"
      ],
      "custo": [
        "gratis"
      ]
    },
    "pior": {
      "companhia": [
        "sozinho"
      ],
      "duracao": [
        "mais-6"
      ],
      "transporte": [
        "publico"
      ],
      "ambiente": [
        "ruas"
      ],
      "custo": [
        "moderado"
      ]
    }
  },
  {
    "id": "galeria-marco-zero",
    "nome": "Galeria Marco Zero",
    "zona": "Zona Sul",
    "descricao": {
      "pt": "Uma parada para apreciar produções artísticas e explorar uma experiência cultural na Zona Sul.",
      "en": "A stop to appreciate artistic works and enjoy a cultural experience in the South Zone.",
      "es": "Una parada para apreciar obras artísticas y vivir una experiencia cultural en la zona sur.",
      "de": "Ein Zwischenstopp, um Kunstwerke zu entdecken und Kultur im Süden Recifes zu erleben."
    },
    "tags": {
      "pt": [
        "Arte",
        "Cultura",
        "Galeria"
      ],
      "en": [
        "Art",
        "Culture",
        "Gallery"
      ],
      "es": [
        "Arte",
        "Cultura",
        "Galería"
      ],
      "de": [
        "Kunst",
        "Kultur",
        "Galerie"
      ]
    },
    "melhor": {
      "companhia": [
        "sozinho",
        "casal"
      ],
      "duracao": [
        "1-2"
      ],
      "transporte": [
        "ape",
        "carro"
      ],
      "ambiente": [
        "museus"
      ],
      "custo": [
        "gratis"
      ]
    },
    "pior": {
      "companhia": [
        "amigos"
      ],
      "duracao": [
        "mais-6"
      ],
      "transporte": [
        "bicicleta"
      ],
      "ambiente": [
        "ruas"
      ],
      "custo": [
        "moderado"
      ]
    }
  },
  {
    "id": "teatro-luiz-mendonca",
    "nome": "Teatro Luiz Mendonça",
    "zona": "Zona Sul",
    "descricao": {
      "pt": "Uma opção para quem busca programação cultural e experiências ligadas às artes cênicas.",
      "en": "A choice for visitors interested in cultural programming and performing arts.",
      "es": "Una opción para quienes buscan programación cultural y experiencias de artes escénicas.",
      "de": "Eine Option für alle, die Kulturprogramm und darstellende Kunst erleben möchten."
    },
    "tags": {
      "pt": [
        "Teatro",
        "Cultura",
        "Artes cênicas"
      ],
      "en": [
        "Theatre",
        "Culture",
        "Performing arts"
      ],
      "es": [
        "Teatro",
        "Cultura",
        "Artes escénicas"
      ],
      "de": [
        "Theater",
        "Kultur",
        "Darstellende Kunst"
      ]
    },
    "melhor": {
      "companhia": [
        "casal",
        "familia"
      ],
      "duracao": [
        "2-4"
      ],
      "transporte": [
        "carro",
        "publico"
      ],
      "ambiente": [
        "museus"
      ],
      "custo": [
        "moderado"
      ]
    },
    "pior": {
      "companhia": [
        "sozinho"
      ],
      "duracao": [
        "1-2"
      ],
      "transporte": [
        "ape"
      ],
      "ambiente": [
        "natureza"
      ],
      "custo": [
        "gratis"
      ]
    }
  },
  {
    "id": "feirinha-boa-viagem",
    "nome": "Feirinha de Boa Viagem",
    "zona": "Zona Sul",
    "descricao": {
      "pt": "Passeio descontraído para circular pelas bancas, conhecer produtos e aproveitar o movimento local.",
      "en": "A relaxed outing to browse stalls, discover local goods and enjoy the lively atmosphere.",
      "es": "Un paseo tranquilo para recorrer puestos, descubrir productos y disfrutar del ambiente local.",
      "de": "Ein entspannter Bummel entlang der Stände, um lokale Produkte und die lebendige Atmosphäre zu entdecken."
    },
    "tags": {
      "pt": [
        "Feira",
        "Comércio local",
        "Passeio"
      ],
      "en": [
        "Market",
        "Local shopping",
        "Stroll"
      ],
      "es": [
        "Mercado",
        "Comercio local",
        "Paseo"
      ],
      "de": [
        "Markt",
        "Lokaler Handel",
        "Bummel"
      ]
    },
    "melhor": {
      "companhia": [
        "familia",
        "amigos"
      ],
      "duracao": [
        "1-2"
      ],
      "transporte": [
        "ape",
        "carro"
      ],
      "ambiente": [
        "ruas"
      ],
      "custo": [
        "economico"
      ]
    },
    "pior": {
      "companhia": [
        "sozinho"
      ],
      "duracao": [
        "mais-6"
      ],
      "transporte": [
        "bicicleta"
      ],
      "ambiente": [
        "religioso"
      ],
      "custo": [
        "moderado"
      ]
    }
  },
  {
    "id": "oficina-francisco-brennand",
    "nome": "Oficina Francisco Brennand",
    "zona": "Zona Oeste",
    "descricao": {
      "pt": "Explore um espaço artístico marcado pela obra de Francisco Brennand e por uma experiência cultural singular.",
      "en": "Explore an artistic space shaped by Francisco Brennand’s work and a distinctive cultural experience.",
      "es": "Explora un espacio artístico marcado por la obra de Francisco Brennand y una experiencia cultural singular.",
      "de": "Entdecke einen Kunstort, der von Francisco Brennands Werk und einem besonderen Kulturerlebnis geprägt ist."
    },
    "tags": {
      "pt": [
        "Arte",
        "Cerâmica",
        "Cultura"
      ],
      "en": [
        "Art",
        "Ceramics",
        "Culture"
      ],
      "es": [
        "Arte",
        "Cerámica",
        "Cultura"
      ],
      "de": [
        "Kunst",
        "Keramik",
        "Kultur"
      ]
    },
    "melhor": {
      "companhia": [
        "casal",
        "familia"
      ],
      "duracao": [
        "2-4"
      ],
      "transporte": [
        "carro"
      ],
      "ambiente": [
        "museus",
        "natureza"
      ],
      "custo": [
        "moderado"
      ]
    },
    "pior": {
      "companhia": [
        "sozinho"
      ],
      "duracao": [
        "1-2"
      ],
      "transporte": [
        "ape"
      ],
      "ambiente": [
        "religioso"
      ],
      "custo": [
        "gratis"
      ]
    }
  },
  {
    "id": "instituto-ricardo-brennand",
    "nome": "Instituto Ricardo Brennand",
    "zona": "Zona Oeste",
    "descricao": {
      "pt": "Uma visita para conhecer coleções e exposições em um espaço dedicado à arte e à história.",
      "en": "Visit collections and exhibitions in a space dedicated to art and history.",
      "es": "Conoce colecciones y exposiciones en un espacio dedicado al arte y a la historia.",
      "de": "Entdecke Sammlungen und Ausstellungen an einem Ort, der Kunst und Geschichte gewidmet ist."
    },
    "tags": {
      "pt": [
        "Arte",
        "História",
        "Museu"
      ],
      "en": [
        "Art",
        "History",
        "Museum"
      ],
      "es": [
        "Arte",
        "Historia",
        "Museo"
      ],
      "de": [
        "Kunst",
        "Geschichte",
        "Museum"
      ]
    },
    "melhor": {
      "companhia": [
        "amigos",
        "casal"
      ],
      "duracao": [
        "4-6"
      ],
      "transporte": [
        "carro"
      ],
      "ambiente": [
        "museus"
      ],
      "custo": [
        "moderado"
      ]
    },
    "pior": {
      "companhia": [
        "sozinho"
      ],
      "duracao": [
        "1-2"
      ],
      "transporte": [
        "ape",
        "publico"
      ],
      "ambiente": [
        "religioso"
      ],
      "custo": [
        "gratis"
      ]
    }
  },
  {
    "id": "jardim-botanico",
    "nome": "Jardim Botânico do Recife",
    "zona": "Zona Oeste",
    "descricao": {
      "pt": "Um passeio tranquilo para observar a vegetação e aproveitar um ambiente natural na Zona Oeste.",
      "en": "A calm outing to observe plant life and enjoy a natural setting in the West Zone.",
      "es": "Un paseo tranquilo para observar la vegetación y disfrutar de un entorno natural en la zona oeste.",
      "de": "Ein ruhiger Ausflug, um Pflanzen zu entdecken und die Natur im Westen Recifes zu genießen."
    },
    "tags": {
      "pt": [
        "Natureza",
        "Vegetação",
        "Ao ar livre"
      ],
      "en": [
        "Nature",
        "Plant life",
        "Outdoors"
      ],
      "es": [
        "Naturaleza",
        "Vegetación",
        "Al aire libre"
      ],
      "de": [
        "Natur",
        "Pflanzenwelt",
        "Im Freien"
      ]
    },
    "melhor": {
      "companhia": [
        "casal",
        "familia"
      ],
      "duracao": [
        "2-4"
      ],
      "transporte": [
        "carro",
        "publico"
      ],
      "ambiente": [
        "natureza"
      ],
      "custo": [
        "gratis"
      ]
    },
    "pior": {
      "companhia": [
        "amigos"
      ],
      "duracao": [
        "mais-6"
      ],
      "transporte": [
        "ape",
        "bicicleta"
      ],
      "ambiente": [
        "religioso"
      ],
      "custo": [
        "moderado"
      ]
    }
  },
  {
    "id": "cachoeira-brennand",
    "nome": "Cachoeira de Brennand",
    "zona": "Zona Oeste",
    "descricao": {
      "pt": "Uma opção de passeio junto à natureza para quem busca um cenário diferente na Zona Oeste.",
      "en": "A nature-side outing for visitors looking for a different kind of scenery in the West Zone.",
      "es": "Una salida en contacto con la naturaleza para quienes buscan un paisaje diferente en la zona oeste.",
      "de": "Ein Ausflug in die Natur für alle, die im Westen Recifes eine andere Kulisse suchen."
    },
    "tags": {
      "pt": [
        "Natureza",
        "Paisagem",
        "Ao ar livre"
      ],
      "en": [
        "Nature",
        "Scenery",
        "Outdoors"
      ],
      "es": [
        "Naturaleza",
        "Paisaje",
        "Al aire libre"
      ],
      "de": [
        "Natur",
        "Landschaft",
        "Im Freien"
      ]
    },
    "melhor": {
      "companhia": [
        "amigos",
        "casal"
      ],
      "duracao": [
        "2-4"
      ],
      "transporte": [
        "bicicleta",
        "carro"
      ],
      "ambiente": [
        "natureza"
      ],
      "custo": [
        "gratis"
      ]
    },
    "pior": {
      "companhia": [
        "familia"
      ],
      "duracao": [
        "1-2"
      ],
      "transporte": [
        "publico"
      ],
      "ambiente": [
        "ruas"
      ],
      "custo": [
        "moderado"
      ]
    }
  },
  {
    "id": "museu-abolicao",
    "nome": "Museu da Abolição",
    "zona": "Zona Oeste",
    "descricao": {
      "pt": "Uma visita cultural para conhecer temas ligados à escravidão, à abolição e à memória brasileira.",
      "en": "A cultural visit exploring themes of slavery, abolition and Brazilian historical memory.",
      "es": "Una visita cultural para conocer temas relacionados con la esclavitud, la abolición y la memoria brasileña.",
      "de": "Ein Kulturbesuch zu den Themen Sklaverei, Abschaffung und brasilianisches historisches Gedächtnis."
    },
    "tags": {
      "pt": [
        "História",
        "Memória",
        "Museu"
      ],
      "en": [
        "History",
        "Memory",
        "Museum"
      ],
      "es": [
        "Historia",
        "Memoria",
        "Museo"
      ],
      "de": [
        "Geschichte",
        "Erinnerung",
        "Museum"
      ]
    },
    "melhor": {
      "companhia": [
        "sozinho",
        "casal"
      ],
      "duracao": [
        "1-2"
      ],
      "transporte": [
        "carro",
        "publico"
      ],
      "ambiente": [
        "museus"
      ],
      "custo": [
        "gratis"
      ]
    },
    "pior": {
      "companhia": [
        "amigos"
      ],
      "duracao": [
        "mais-6"
      ],
      "transporte": [
        "bicicleta"
      ],
      "ambiente": [
        "natureza"
      ],
      "custo": [
        "moderado"
      ]
    }
  },
  {
    "id": "torre-malakoff",
    "nome": "Torre Malakoff",
    "zona": "Centro Hist.",
    "descricao": {
      "pt": "Um ponto cultural do Centro Histórico para conhecer exposições e explorar a região a pé.",
      "en": "A cultural landmark in the Historic Center for discovering exhibitions and exploring on foot.",
      "es": "Un punto cultural del Centro Histórico para conocer exposiciones y recorrer la zona a pie.",
      "de": "Ein Kulturort im Historischen Zentrum, um Ausstellungen zu entdecken und die Gegend zu Fuß zu erkunden."
    },
    "tags": {
      "pt": [
        "Cultura",
        "História",
        "Exposições"
      ],
      "en": [
        "Culture",
        "History",
        "Exhibitions"
      ],
      "es": [
        "Cultura",
        "Historia",
        "Exposiciones"
      ],
      "de": [
        "Kultur",
        "Geschichte",
        "Ausstellungen"
      ]
    },
    "melhor": {
      "companhia": [
        "sozinho",
        "casal"
      ],
      "duracao": [
        "1-2"
      ],
      "transporte": [
        "ape",
        "carro"
      ],
      "ambiente": [
        "museus"
      ],
      "custo": [
        "gratis"
      ]
    },
    "pior": {
      "companhia": [
        "familia"
      ],
      "duracao": [
        "mais-6"
      ],
      "transporte": [
        "bicicleta"
      ],
      "ambiente": [
        "natureza"
      ],
      "custo": [
        "moderado"
      ]
    }
  },
  {
    "id": "paco-frevo",
    "nome": "Paço do Frevo",
    "zona": "Centro Hist.",
    "descricao": {
      "pt": "Mergulhe na história do frevo e na cultura carnavalesca do Recife em uma visita cultural.",
      "en": "Discover the history of frevo and Recife’s Carnival culture through a cultural visit.",
      "es": "Sumérgete en la historia del frevo y la cultura del Carnaval de Recife en una visita cultural.",
      "de": "Entdecke die Geschichte des Frevo und Recifes Karnevalskultur bei einem Kulturbesuch."
    },
    "tags": {
      "pt": [
        "Frevo",
        "Cultura",
        "Música"
      ],
      "en": [
        "Frevo",
        "Culture",
        "Music"
      ],
      "es": [
        "Frevo",
        "Cultura",
        "Música"
      ],
      "de": [
        "Frevo",
        "Kultur",
        "Musik"
      ]
    },
    "melhor": {
      "companhia": [
        "amigos",
        "casal"
      ],
      "duracao": [
        "2-4"
      ],
      "transporte": [
        "ape",
        "publico"
      ],
      "ambiente": [
        "museus"
      ],
      "custo": [
        "economico"
      ]
    },
    "pior": {
      "companhia": [
        "sozinho"
      ],
      "duracao": [
        "mais-6"
      ],
      "transporte": [
        "bicicleta"
      ],
      "ambiente": [
        "natureza"
      ],
      "custo": [
        "moderado"
      ]
    }
  },
  {
    "id": "sinagoga-kahal-zur-israel",
    "nome": "Sinagoga Kahal Zur Israel",
    "zona": "Centro Hist.",
    "descricao": {
      "pt": "Conheça um marco da presença judaica no Recife e uma parte importante da memória local.",
      "en": "Discover a landmark of Jewish presence in Recife and an important part of local memory.",
      "es": "Conoce un referente de la presencia judía en Recife y una parte importante de la memoria local.",
      "de": "Entdecke ein Zeugnis jüdischen Lebens in Recife und einen wichtigen Teil der lokalen Erinnerung."
    },
    "tags": {
      "pt": [
        "História",
        "Religião",
        "Patrimônio"
      ],
      "en": [
        "History",
        "Religion",
        "Heritage"
      ],
      "es": [
        "Historia",
        "Religión",
        "Patrimonio"
      ],
      "de": [
        "Geschichte",
        "Religion",
        "Kulturerbe"
      ]
    },
    "melhor": {
      "companhia": [
        "sozinho",
        "casal"
      ],
      "duracao": [
        "1-2"
      ],
      "transporte": [
        "ape",
        "publico"
      ],
      "ambiente": [
        "religioso"
      ],
      "custo": [
        "economico"
      ]
    },
    "pior": {
      "companhia": [
        "amigos"
      ],
      "duracao": [
        "mais-6"
      ],
      "transporte": [
        "bicicleta"
      ],
      "ambiente": [
        "natureza"
      ],
      "custo": [
        "moderado"
      ]
    }
  },
  {
    "id": "rua-bom-jesus",
    "nome": "Rua do Bom Jesus",
    "zona": "Centro Hist.",
    "descricao": {
      "pt": "Caminhe por uma rua emblemática do Recife Antigo e descubra diferentes camadas da história da cidade.",
      "en": "Walk along an emblematic Old Recife street and discover layers of the city’s history.",
      "es": "Recorre una calle emblemática de Recife Antiguo y descubre distintas capas de la historia de la ciudad.",
      "de": "Spaziere durch eine emblematische Straße im alten Recife und entdecke die Stadtgeschichte."
    },
    "tags": {
      "pt": [
        "História",
        "Patrimônio",
        "Caminhada"
      ],
      "en": [
        "History",
        "Heritage",
        "Walking"
      ],
      "es": [
        "Historia",
        "Patrimonio",
        "Caminata"
      ],
      "de": [
        "Geschichte",
        "Kulturerbe",
        "Spaziergang"
      ]
    },
    "melhor": {
      "companhia": [
        "amigos",
        "casal"
      ],
      "duracao": [
        "1-2"
      ],
      "transporte": [
        "ape"
      ],
      "ambiente": [
        "ruas"
      ],
      "custo": [
        "economico"
      ]
    },
    "pior": {
      "companhia": [
        "sozinho"
      ],
      "duracao": [
        "mais-6"
      ],
      "transporte": [
        "carro"
      ],
      "ambiente": [
        "natureza"
      ],
      "custo": [
        "moderado"
      ]
    }
  },
  {
    "id": "marco-zero",
    "nome": "Marco Zero",
    "zona": "Centro Hist.",
    "descricao": {
      "pt": "Comece o passeio pelo coração simbólico do Recife Antigo e aproveite a paisagem da área portuária.",
      "en": "Start in the symbolic heart of Old Recife and enjoy the waterfront scenery.",
      "es": "Comienza el paseo en el corazón simbólico de Recife Antiguo y disfruta del paisaje portuario.",
      "de": "Beginne im symbolischen Herzen des alten Recife und genieße den Blick auf das Hafengebiet."
    },
    "tags": {
      "pt": [
        "Cartão-postal",
        "Cultura",
        "Ao ar livre"
      ],
      "en": [
        "Landmark",
        "Culture",
        "Outdoors"
      ],
      "es": [
        "Postal",
        "Cultura",
        "Al aire libre"
      ],
      "de": [
        "Wahrzeichen",
        "Kultur",
        "Im Freien"
      ]
    },
    "melhor": {
      "companhia": [
        "amigos",
        "casal"
      ],
      "duracao": [
        "1-2"
      ],
      "transporte": [
        "bicicleta",
        "publico"
      ],
      "ambiente": [
        "ruas"
      ],
      "custo": [
        "gratis"
      ]
    },
    "pior": {
      "companhia": [
        "sozinho"
      ],
      "duracao": [
        "mais-6"
      ],
      "transporte": [
        "carro"
      ],
      "ambiente": [
        "religioso"
      ],
      "custo": [
        "moderado"
      ]
    }
  }
];
