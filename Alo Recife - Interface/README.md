# Alô Recife — protótipo do Totemfone

Interface web em HTML, CSS e JavaScript, organizada para a tela vertical do totem. A versão integra a seleção de idioma em português, inglês, espanhol e alemão e usa a Stack Sans Headline quando instalada no computador e mantém fontes de sistema como alternativa.

## Como executar

**Alternativa — VS Code + Live Server**

1. Extraia o ZIP para uma pasta.
2. Abra a pasta no VS Code.
3. Abra `index.html` com a extensão Live Server.

**Opção recomendada — servidor local com Python (inclui salvamento dos feedbacks)**

Abra um terminal dentro da pasta do projeto e execute:

```bash
python server.py
```

No navegador, acesse `http://localhost:8000`. No Windows, se `python` não funcionar, tente `py server.py`. O servidor disponibiliza a interface e grava cada avaliação no arquivo `data/feedbacks.json`. Para encerrar, pressione `Ctrl+C` no terminal.

**Alternativa — Live Server / arquivo local**

A interface também funciona com a extensão Live Server ou aberta como arquivo HTML. Nesse modo, os feedbacks ficam apenas no armazenamento do navegador (`localStorage`); para gravar no arquivo JSON com Python, execute `server.py`.

A geração do QR Code usa uma biblioteca local em `assets/qrcode.min.js` e não precisa de internet. O celular que ler o QR Code precisa de internet para abrir o Google Maps. Todas as rotas do QR Code partem do **prédio Brum da CESAR School**, na Avenida Cais do Apolo, 77, Bairro do Recife, Recife - PE, CEP 50030-220. A origem usa as coordenadas do ponto indicado pelo link “Ver no mapa” da página oficial da CESAR School. O destino e o meio de transporte continuam variando conforme o passeio recomendado e a resposta do visitante.

## Arquivos principais

- `index.html`: estrutura das telas.
- `style.css`: layout, cores, fonte, botões e ajustes para tela vertical.
- `script.js`: troca de idioma, navegação, questionário, pontuação, QR Code e armazenamento/exportação do feedback.
- `destinos.js`: catálogo dos 20 destinos, descrições, tópicos e critérios de compatibilidade.
- `assets/`: faixas decorativas, logotipo, elementos visuais e biblioteca de QR Code. A fonte Stack Sans Headline não vai dentro deste pacote; se estiver instalada no computador do totem, será usada automaticamente.

## Perguntas, destinos e pontuação

- As seis perguntas definitivas estão configuradas nos quatro idiomas disponíveis: português, inglês, espanhol e alemão.
- `destinos.js` reúne os 20 destinos e a matriz Melhor/Pior da planilha. Na Pergunta 1, os cinco destinos da região escolhida recebem **+3 pontos** e os outros quinze recebem **−3 pontos**; nenhum destino é removido da disputa. Nas Perguntas 2 a 6, cada correspondência em Melhor soma **+2 pontos**, cada correspondência em Pior subtrai **1 ponto**, e respostas não classificadas valem zero. Em caso de empate, um dos destinos empatados é escolhido aleatoriamente.
- A Pergunta 1 apresenta as quatro regiões: Zona Norte, Zona Sul, Centro Histórico e Zona Oeste. A pontuação regional aplica a mesma regra para qualquer uma das quatro opções.
- Descrições e tópicos são textos editoriais curtos para o protótipo. A planilha não inclui preços, endereços ou horários; esses dados não são inventados nem exibidos nesta versão.
- Algumas abreviações dos nomes foram expandidas para facilitar a leitura. Na linha da Feirinha de Boa Viagem, “A oé/Carro” foi interpretado como “A pé/Carro”, por provável erro de digitação; vale confirmar essa interpretação com o grupo.

## Página Sobre Nós

A página apresenta a descrição do projeto em três parágrafos nos quatro idiomas. A caixa identificada como “Espaço reservado para a foto da equipe” é uma área provisória: ela pode ser substituída por uma imagem da equipe quando o arquivo estiver disponível. O botão de retorno mantém o mesmo tamanho e alinhamento físico do botão da página de idiomas.

## Feedback

- As avaliações são gravadas no `localStorage` deste navegador, na chave `alo_feedback`: `1` = Muito Insatisfeito(a), `2` = Insatisfeito(a), `3` = Satisfeito(a), `4` = Muito Satisfeito(a). “Não Avaliar” fica registrado separadamente (`valor: null`).
- No console do navegador, `aloRecifeFeedback.ler()` consulta a cópia local, `aloRecifeFeedback.lerTudo()` reúne os registros do servidor e do navegador, e `aloRecifeFeedback.exportar()` baixa um JSON.
- Com `python server.py`, as avaliações são gravadas em `data/feedbacks.json` no computador que hospeda o servidor; diferentes navegadores nesse computador compartilham o arquivo. O servidor escuta apenas no próprio computador por padrão. Para permitir acesso em uma rede local confiável, inicie com `HOST=0.0.0.0 python server.py` (Windows PowerShell: `$env:HOST="0.0.0.0"; py server.py`). Sem o servidor, permanece apenas a cópia local do navegador.

## Integração física

A comunicação com os botões físicos do Arduino ainda não está integrada; por enquanto, a interface responde a toque/clique.

## Dicas de teste para o totem

- Teste em tela cheia na resolução nativa do monitor, com orientação vertical.
- Confira se os centros dos três botões da tela inicial e as três fileiras do questionário coincidem com as posições físicas. As posições atuais são aproximadas; ajuste as regras `#tela-inicial .botoes-inicio .linha:nth-child(...)` e `#tela-quiz .botoes-base .linha:nth-child(...)` em `style.css` se as dimensões físicas mudarem.
- Teste os quatro idiomas, as seis perguntas e as quatro regiões; confirme que cada região concede +3 aos seus cinco destinos e −3 aos outros quinze. Depois escaneie o QR Code com um celular real.
- Para consultar ou exportar as avaliações, use `aloRecifeFeedback.ler()`, `aloRecifeFeedback.lerTudo()` ou `aloRecifeFeedback.exportar()` no console do navegador.
- A matriz da planilha não informa endereços, preços ou horários. As descrições e os tópicos exibidos são textos editoriais do protótipo, não dados operacionais verificados.
