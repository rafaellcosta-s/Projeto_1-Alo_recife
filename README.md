# 📍 Alô, Recife! — Totem Interativo Figital

> **Experienciando o Recife:** uma nova forma de vivenciar o turismo na cidade, reaproveitando a carcaça dos antigos orelhões em totens interativos e gamificados.

Projeto do **Grupo 10 (G10)** da **CESAR School**, desenvolvido na disciplina de Projeto 1.
Site do projeto: [sites.google.com/cesar.school/projeto-1-g10](https://sites.google.com/cesar.school/projeto-1-g10/home)

---

## 📌 Sobre o projeto

O **Alô, Recife!** é uma solução *figital* (física + digital) que aproxima turistas e moradores da cultura da cidade. No totem, o visitante responde a um questionário rápido usando botões e recebe a recomendação de um passeio, com descrição do destino e um **QR Code** que abre a rota no Google Maps direto no celular.

## ⚙️ Funcionalidades

- **4 idiomas:** português, inglês, espanhol e alemão.
- **Questionário** com perguntas sobre região, perfil e preferências do passeio.
- **20 destinos** cadastrados, cada um com descrição e tópicos de características.
- **Pontuação por compatibilidade:** a região escolhida dá +3 aos destinos daquela região e −3 aos demais; nas outras perguntas, cada correspondência em "Melhor" soma +2 e em "Pior" subtrai 1. Em caso de empate, o desempate é aleatório.
- **QR Code com a rota** a partir do prédio Brum da CESAR School (Av. Cais do Apolo, 77, Bairro do Recife). O QR Code é gerado localmente, sem internet; o celular precisa de internet para abrir o Google Maps.
- **Avaliação da experiência** (1 a 4, ou "Não Avaliar") ao final do passeio, salva em `data/feedbacks.json` quando o servidor Python está rodando.
- **Layout vertical** pensado para a tela do totem, com botões alinhados aos botões físicos.

## 🛠️ Tecnologias e hardware

<div align="center">

| Camada | Itens |
| --- | --- |
| Interface | HTML, CSS e JavaScript (sem frameworks) |
| Servidor local | Python 3 (`server.py`), serve a interface e grava os feedbacks |
| Hardware | Arduino, 6 botões arcade (3 de cada lado da tela), monitor 21"–24", Raspberry Pi ou notebook/mini PC |
| Estrutura | Orelhão reaproveitado, MDF, acrílico e vinil adesivo |

</div>

## 👥 Integrantes do Projeto

<div align="center">

|Membro | E-mail |
| :---: | :---: |
|Eduardo Pedrosa Miranda | **epm@cesar.school** |
|Gabriel Gomes Mendes | **ggm2@cesar.school** |
|João Filipe R. S. Arruda | **jfrsa@cesar.school** |
|José Rodrigues Dos S. Neto | **jrsn@cesar.school** |
|Leticia Mendonça Lagos| **lml3@cesar.school** |
|Leticia Sabino Lins | **lsl3@cesar.school** |
|Luiz Rodolfo de S. Cabral | **lrsc@cesar.school** | 
|Rafael Costa e Silva | **rcs9@cesar.school** |
|Renata Rodrigues Bezerra | **rrb2@cesar.school** |

</div>

## 📄 Licença

Distribuído sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE).
