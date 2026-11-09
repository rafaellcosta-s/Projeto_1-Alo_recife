# Alô Recife - Arduino


O trabalho deste código é um só: **perceber qual botão foi apertado e avisar o computador**. A interface (HTML/CSS/JS) roda no computador, mas ela não consegue "sentir" um botão de verdade. O Arduino faz essa ponte entre o mundo físico e o mundo digital.

```
[ Botão apertado ] -> [ Arduino ] -> cabo USB -> [ Computador ] -> [ Interface ]
     (físico)        (este código)               (recebe 1 a 6)     (muda a tela)
```

## O que o código faz, em resumo

1. Fica **verificando os 6 botões o tempo todo**, uma volta atrás da outra.
2. Quando percebe que um botão foi apertado de verdade, envia para o computador o **número daquele botão** (de 1 a 6).
3. Ignora ruídos elétricos e aperta-aperta falso, para não enviar o mesmo botão várias vezes sem necessidade.

## Como o código funciona por dentro

### 1. Ligação dos botões e o pull-up

Cada botão é ligado entre um **pino digital** e o **GND**:

| Botão | Pino do Arduino |
|:-----:|:---------------:|
| 1     | 2               |
| 2     | 3               |
| 3     | 4               |
| 4     | 5               |
| 5     | 6               |
| 6     | 7               |

Um pino de entrada "solto" no ar pode ler valores aleatórios. Para evitar isso, o código ativa o **resistor de pull-up interno** do Arduino (`INPUT_PULLUP`). Ele mantém o pino em nível alto enquanto nada acontece:

- **Botão solto:** o pino lê `HIGH`.
- **Botão pressionado:** o botão conecta o pino ao GND, e o pino lê `LOW`.

Por isso, no código, "botão pressionado" significa `LOW` (o contrário do que muita gente espera). A vantagem é que **não precisa de resistor externo**, o que deixa a montagem mais simples.

Nos botões arcade, use os terminais **NO** (normalmente aberto) e **COM** do microswitch: um vai no pino e o outro no GND.

### 2. O problema do ruído (debounce)

Quando se aperta um botão mecânico, o contato metálico "quica" por alguns milissegundos. Para o Arduino, que lê milhares de vezes por segundo, isso parece **vários apertos seguidos** em vez de um só.

A solução é o **debounce**: o código só aceita a mudança de estado depois que o sinal ficou **estável por 50 ms** (`TEMPO_DEBOUNCE`). Isso é feito com `millis()`, que conta há quanto tempo o Arduino está ligado, sem travar o programa. Assim os outros botões continuam sendo lidos enquanto um deles espera estabilizar.

### 3. As variáveis de cada botão

O código guarda 3 informações para **cada** um dos 6 botões, em listas (arrays):

| Variável | O que guarda |
|----------|--------------|
| `ultimaLeitura` | Último valor bruto lido no pino (pode ser ruído) |
| `estadoEstavel` | Estado já validado, depois do debounce |
| `ultimoTempoMudanca` | Momento em que a leitura mudou pela última vez |

### 4. O `setup()` (roda uma vez ao ligar)

- Configura os 6 pinos como entrada com pull-up.
- Define o estado inicial de todos como "solto" (`HIGH`).
- Inicia a comunicação com o computador (Serial a 9600 baud, ou teclado USB, conforme a abordagem escolhida).

### 5. O `loop()` (roda sem parar)

A cada volta, para **cada botão**, o código faz:

1. Lê o pino.
2. Se a leitura **mudou** em relação à anterior, reinicia o cronômetro daquele botão (pode ser ruído ou um aperto real).
3. Se o sinal ficou **estável por mais de 50 ms** e é **diferente do estado validado**, houve uma mudança real.
4. Se essa mudança foi para `LOW` (apertou), chama `botaoPressionado()` com o número do botão (1 a 6).

O envio acontece **só ao apertar**, nunca ao soltar. Isso evita mensagens duplicadas por aperto.

### 6. As duas abordagens de comunicação

A constante `ABORDAGEM`, no início do código, escolhe **como** o Arduino avisa o computador. A função `botaoPressionado()` age conforme o valor escolhido:

| Valor | Modo | Como avisa | Compatibilidade |
|:-----:|------|------------|-----------------|
| `1` (padrão) | **Serial** | Envia o número do botão (`1` a `6`) seguido de quebra de linha | Qualquer placa (Uno, Nano, Mega, Pro Micro, Leonardo...) |
| `2` | **Teclado USB (HID)** | O Arduino se apresenta como um teclado e "digita" a tecla `1` a `6` | Somente placas ATmega32U4 (Pro Micro, Leonardo, Micro) |

Se a abordagem 2 for usada numa placa incompatível (como a Uno), o código avisa com um erro de compilação.

## Integração com a interface

A interface do projeto fica na pasta `Alo Recife - Interface` do repositório. Ela recebe os números enviados por este código e usa cada um como a resposta da pessoa na pergunta que está na tela.
