# Alô Recife — protótipo do Totemfone

Interface web em HTML, CSS e JavaScript, organizada para a tela vertical do totem. A versão integra a seleção de idioma em português, inglês, espanhol e alemão e reaproveita a fonte Stack Sans Headline do arquivo compartilhado pela equipe.

## Como executar

**Opção recomendada — VS Code + Live Server**

1. Extraia o ZIP para uma pasta.
2. Abra a pasta no VS Code.
3. Abra `index.html` com a extensão Live Server.

**Alternativa — servidor local com Python**

Abra um terminal dentro da pasta do projeto e execute:

```bash
python -m http.server 8000
```

No navegador, acesse `http://localhost:8000`. No Windows, se `python` não funcionar, tente `py -m http.server 8000`.

A geração do QR Code usa uma biblioteca local em `assets/qrcode.min.js` e não precisa de internet. O celular que ler o QR Code precisa de internet para abrir o Google Maps.

## Arquivos principais

- `index.html`: estrutura das telas.
- `style.css`: layout, cores, fonte, botões e ajustes para tela vertical.
- `script.js`: troca de idioma, navegação, perguntas de exemplo, pontuação, roteiro, QR Code e feedback.
- `assets/`: faixas decorativas, logotipo, fontes locais, biblioteca de QR Code e sombrinha provisória.

## O que ainda é provisório

- A pergunta 1 acompanha o Figma mais recente (“Qual região de Recife?”). As perguntas 2 a 6 são exemplos traduzidos e devem ser substituídas quando o grupo fechar as perguntas definitivas. A pergunta 7 (acessibilidade, Sim/Não) foi adicionada a partir do README do projeto; por enquanto ela não altera o roteiro, porque os roteiros ainda não têm dados de acessibilidade.
- Os roteiros e pesos de pontuação são exemplos de demonstração, ainda precisam ser validados pela pesquisa do grupo.
- Os valores de ingresso mostrados para o Paço do Frevo reproduzem o texto do protótipo visual e **não foram verificados como informação atual**. Confirmem preços, horários e condições antes da apresentação.
- `assets/sombrinha-frevo.svg` é uma arte provisória simples. Substituam pelo arquivo definitivo da equipe, mantendo o mesmo nome ou atualizando o caminho em `index.html`.
- A comunicação com os botões físicos do Arduino ainda não está integrada nesta versão. Por enquanto, as interações são feitas por toque/clique na interface.

## Dicas de teste para o totem

- Teste em tela cheia na resolução nativa do monitor, com orientação vertical.
- Confira se os centros dos três botões da tela inicial e as três fileiras do questionário coincidem com as posições físicas. As posições atuais são aproximadas; ajuste as regras `#tela-inicial .botoes-inicio .linha:nth-child(...)` e `#tela-quiz .botoes-base .linha:nth-child(...)` em `style.css` se as dimensões físicas mudarem.
- Teste os quatro idiomas e escaneie o QR Code com um celular real.
- Não use os preços/horários de exemplo como informação confirmada para visitantes.
