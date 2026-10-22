# tsconfig.json: Configuração e Seleção de Arquivos

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](../../LICENSE)
[![Stars](https://img.shields.io/github/stars/AntonioJavaDeveloper/mastering-typescript?style=social)](https://github.com/AntonioJavaDeveloper/mastering-typescript/stargazers)
[![Forks](https://img.shields.io/github/forks/AntonioJavaDeveloper/mastering-typescript?style=social)](https://github.com/AntonioJavaDeveloper/mastering-typescript/network/members)

---

## 🧭 Navegação

📂 [`README principal do repositório`](https://github.com/AntonioJavaDeveloper/mastering-typescript/blob/main/README.pt-BR.md)  
└── 📁 [`Introdução do capítulo`](./README.pt-BR.md)  
  ├── [`01 - JavaScript, ECMAScript, Node.js e Motores JavaScript`](./1-javascript-ecmascript-nodejs-e-motores.pt-BR.md)  
  ├── [`02 - TypeScript e Verificação de Tipos`](./2-o-que-e-typescript-e-verificacao-de-tipos.pt-BR.md)  
  ├── [`03 - Node.js e npm`](./3-nodejs-e-npm.pt-BR.md)  
  ├── [`04 - Gerenciamento de Dependências com npm`](./4-package-json-e-package-lock.pt-BR.md)  
  ├── [`05 - Instalação e Gerenciamento de Dependências`](./5-instalacao-e-gerenciamento-de-dependencias.pt-BR.md)  
  ├── [`06 - TypeScript: Compilação e Execução com tsc e tsx`](./6-typescript-e-execucao-com-tsc-e-tsx.pt-BR.md)  
  ├── [`07 - tsconfig.json: Configuração e Seleção de Arquivos`](./7-tsconfig-e-selecao-de-arquivos.pt-BR.md) ← **você está aqui**  
  ├── [`08 - tsc: Argumentos, Arquivos e Projetos`](./8-tsc-argumentos-e-compilacao-de-projetos.pt-BR.md)  
  └── [`09 - Verificação de Tipos e Execução Controlada`](./9-verificacao-de-tipos-e-execucao-controlada.pt-BR.md)

---

## 🎯 Introdução

Nos documentos anteriores, conhecemos o compilador TypeScript, aprendemos a verificar tipos, gerar arquivos JavaScript e executar o exemplo `Pessoa.ts` com Node.js e `tsx`.

Até aqui, utilizamos comandos que informavam diretamente o arquivo de entrada e as opções necessárias para a compilação. Entretanto, em projetos com vários arquivos, repetir essas informações em cada comando pode tornar o processo trabalhoso e dificultar a manutenção.

Surge, então, uma pergunta importante: **como o compilador sabe quais arquivos deve analisar e quais configurações deve utilizar quando não informamos essas opções diretamente no comando?**

É nesse contexto que entra o arquivo `tsconfig.json`. Ele permite definir as opções do compilador e estabelecer quais arquivos fazem parte do projeto TypeScript.

Neste documento, vamos criar esse arquivo, conhecer suas principais configurações e observar como o compilador identifica os arquivos que deve verificar ou transformar em JavaScript.

### 🏷️ O que será aprendido?

- Como criar um `tsconfig.json` utilizando `npx tsc --init`.
- Onde configurar `target`, `module`, `strict`, `noEmit` e `outDir`.
- Como o compilador seleciona arquivos com `include`, `exclude` e `files`.
- Por que arquivos importados também podem participar da verificação.
- Como consultar a configuração efetiva e listar os arquivos selecionados.
- Como executar o compilador diretamente ou por meio dos scripts do npm.

---

## ⚙️ O que é o `tsconfig.json`?

O `tsconfig.json` é o arquivo de configuração de um projeto TypeScript. Sua presença identifica o diretório como a raiz de um projeto e permite definir as opções de compilação e os arquivos que devem ser considerados pelo compilador.

Em vez de informar todas as opções em cada comando, podemos registrá-las nesse arquivo e reutilizá-las durante o desenvolvimento.

Por exemplo:

```json
{
  "compilerOptions": {
    "strict": true,
    "noEmit": true
  },
  "include": ["src/**/*.ts"]
}
```

Esse exemplo estabelece três definições:

| Propriedade | Finalidade |
|---|---|
| `compilerOptions` | Reúne as opções de comportamento do compilador. |
| `strict` | Ativa um conjunto de verificações mais rigorosas de tipos. |
| `noEmit` | Impede a geração de arquivos de saída. |
| `include` | Define um padrão para selecionar arquivos TypeScript dentro de `src/`. |

A configuração acima é um exemplo inicial para demonstrar a verificação do projeto. Mais adiante, veremos como ajustar as opções quando também quisermos gerar arquivos JavaScript.

### 🛠️ Criando um `tsconfig.json` padrão

O TypeScript disponibiliza o comando `--init` para criar um arquivo inicial de configuração.

Na raiz do repositório, execute:

```bash
npx tsc --init
```

O `npx` permite invocar o compilador disponibilizado pela dependência instalada no projeto. O comando `tsc --init` solicita a criação de um `tsconfig.json` no diretório atual.

> ⚠️ **Atenção:** se já existir um `tsconfig.json`, examine o arquivo antes de executar o comando. Não substitua uma configuração existente sem avaliar o impacto da alteração.

O conteúdo gerado pode variar de acordo com a versão do TypeScript instalada. Versões recentes podem produzir um arquivo inicial mais enxuto, enquanto versões anteriores geravam modelos com diversas opções comentadas.

Portanto, não é necessário que o arquivo gerado seja idêntico ao de outro projeto. O importante é compreender as opções e configurar aquelas que atendem às necessidades do projeto atual.

Depois da criação, abra o `tsconfig.json` na raiz do repositório.

### 🔍 Onde ficam as principais configurações?

As opções que controlam a transformação e a verificação do código ficam dentro de `compilerOptions`.

Veja um exemplo de configuração voltada à verificação e à geração de JavaScript para ES2022:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "strict": true,
    "noEmit": false,
    "outDir": "./dist/ecma2022"
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"]
}
```

Esse exemplo é uma configuração de referência para o exercício. Ele não significa que todas essas propriedades estarão preenchidas automaticamente pelo comando `tsc --init`.

Vamos entender cada uma delas.

| Opção | O que controla? |
|---|---|
| `target` | Define a versão de JavaScript de destino para a transformação. |
| `module` | Define o formato de módulos utilizado na saída. |
| `strict` | Ativa um conjunto de verificações rigorosas de tipos. |
| `noEmit` | Determina se o compilador deve deixar de gerar arquivos de saída. |
| `outDir` | Define o diretório de destino dos arquivos gerados. |
| `include` | Define os padrões de seleção dos arquivos de entrada. |
| `exclude` | Exclui arquivos e diretórios da seleção inicial. |

Essas propriedades possuem funções diferentes. `target`, `module` e `outDir` estão relacionadas principalmente à geração da saída; `strict` controla verificações de tipos; e `include` e `exclude` participam da seleção inicial dos arquivos.

### 🎯 Configurando o `target`

A opção `target` informa ao compilador qual versão do JavaScript deve ser utilizada como destino da transformação.

No documento anterior, utilizamos comandos como:

```bash
npx tsc src/02-typescript-environment-and-dependencies/Pessoa.ts --target ES2022 --module commonjs --outDir dist/es2022
```

Agora, podemos registrar essas opções no `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2022"
  }
}
```

Assim, quando o compilador utilizar a configuração do projeto, não precisaremos repetir `--target ES2022` no comando.

O valor `ES2022` indica a versão de JavaScript de destino. O compilador poderá preservar recursos compatíveis com essa versão e transformar recursos que exijam uma adaptação.

### 📦 Configurando o `module`

A opção `module` determina como o TypeScript trata os módulos na saída gerada.

Por exemplo:

```json
{
  "compilerOptions": {
    "module": "commonjs"
  }
}
```

Neste capítulo, utilizamos `commonjs` para manter o exemplo alinhado aos comandos de compilação e execução apresentados anteriormente.

O formato de módulos adequado depende do ambiente e da organização do projeto. Existem outras opções, como `es2022`, `esnext`, `node16` e `nodenext`. A escolha de `module` não deve ser confundida com a escolha de `target`: uma opção trata do formato dos módulos, enquanto a outra define a versão de JavaScript de destino.

### 🛡️ Configurando o `strict`

A opção `strict` ativa um conjunto de verificações rigorosas de tipos.

```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

Com essa configuração, o compilador aplica verificações adicionais para identificar problemas que poderiam passar despercebidos em uma configuração menos rigorosa.

O valor `true` ativa o conjunto de verificações abrangido por essa opção. Isso não significa que todos os possíveis erros de um programa serão detectados, nem substitui testes ou outras formas de validação.

### 🚫 Configurando o `noEmit`

A opção `noEmit` controla a geração de arquivos de saída.

```json
{
  "compilerOptions": {
    "noEmit": true
  }
}
```

Quando `noEmit` está definido como `true`, o compilador pode verificar os tipos sem gravar os arquivos JavaScript gerados.

Essa configuração é útil quando queremos utilizar o TypeScript para verificar o código sem produzir arquivos de saída.

Por outro lado, quando o objetivo é compilar o código e gerar arquivos JavaScript, precisamos permitir a emissão:

```json
{
  "compilerOptions": {
    "noEmit": false
  }
}
```

**Atenção à diferença:** `noEmit: true` e a geração de arquivos JavaScript representam objetivos diferentes. Se quisermos utilizar a mesma configuração do projeto para verificar e também emitir arquivos, podemos manter `noEmit: false` no `tsconfig.json` e solicitar uma verificação sem emissão por meio de `npx tsc --noEmit`.

Dessa forma, o comando pode substituir a opção configurada para aquela execução.

### 📁 Configurando o `outDir`

No documento anterior, geramos arquivos JavaScript em diretórios diferentes para comparar os resultados de ES2015 e ES2022.

Neste capítulo, adotaremos `dist/ecma2022` como destino dos arquivos gerados para ES2022.

Podemos definir esse caminho no `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "outDir": "./dist/ecma2022"
  }
}
```

A opção `outDir` permite configurar o diretório de saída diretamente no arquivo de configuração, evitando a necessidade de informar `--outDir` repetidamente na linha de comando.

Como o projeto utiliza arquivos em `src/`, o compilador poderá preservar parte dessa estrutura dentro do diretório de saída, de acordo com os arquivos selecionados e o diretório-raiz de origem considerado.

Por exemplo, quando o diretório de origem comum for `src/`, um arquivo localizado em:

```text
src/02-typescript-environment-and-dependencies/Pessoa.ts
```

poderá ser gerado em:

```text
dist/ecma2022/02-typescript-environment-and-dependencies/Pessoa.js
```

O caminho exato depende da organização dos arquivos incluídos e de opções como `rootDir`. O ponto principal é que **`outDir` determina onde os arquivos gerados serão armazenados, enquanto `target` determina a versão de JavaScript de destino**.

---

## 🗂️ Como o TypeScript seleciona os arquivos?

O `tsconfig.json` também permite definir quais arquivos fazem parte do projeto. Para isso, podemos utilizar `include`, `exclude` e `files`.

Essas propriedades ajudam a determinar os arquivos de entrada, mas não funcionam exatamente da mesma maneira.

### 🔎 `include`: padrões para selecionar arquivos

A propriedade `include` define padrões para selecionar arquivos.

Por exemplo:

```json
{
  "include": ["src/**/*.ts"]
}
```

O padrão `src/**/*.ts` indica que devem ser considerados os arquivos TypeScript encontrados em `src/` e em seus subdiretórios.

No repositório, isso permite selecionar arquivos de código organizados por capítulo, como:

```text
src/
├── 01-first-typescript-execution/
│   └── Pessoa.ts
└── 02-typescript-environment-and-dependencies/
    └── Pessoa.ts
```

Com esse padrão, os dois arquivos podem fazer parte do projeto TypeScript, mesmo que estejam em diretórios diferentes.

Isso é importante porque a verificação do projeto não se limita necessariamente ao arquivo que estamos estudando no momento. Ela depende das regras de seleção e das relações entre os arquivos.

### 🚫 `exclude`: exclusão da seleção inicial

A propriedade `exclude` permite excluir arquivos e diretórios dos padrões utilizados na seleção inicial.

Por exemplo:

```json
{
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules", "dist"]
}
```

Nesse exemplo, `node_modules` e `dist` são excluídos da seleção inicial realizada por meio de `include`.

Entretanto, **`exclude` não é uma proibição absoluta de inclusão de arquivos**.

Se um arquivo selecionado importar outro arquivo que esteja em um diretório excluído, esse arquivo importado ainda poderá participar da análise.

Por isso, `exclude` não deve ser entendido como uma barreira que impede o compilador de considerar qualquer arquivo localizado nos caminhos informados.

### 📌 `files`: lista explícita de arquivos

Não precisa realizar a alteração do `tsconfig.json` para a propriedade `files`. O conteúdo dessa seção é meramente didático.

A propriedade `files` permite declarar explicitamente quais arquivos devem fazer parte do projeto.

Por exemplo:

```json
{
  "files": [
    "src/02-typescript-environment-and-dependencies/Pessoa.ts"
  ]
}
```

Nesse caso, o arquivo `Pessoa.ts` é declarado diretamente como um arquivo de entrada do projeto.

Essa abordagem pode ser útil quando queremos controlar uma lista pequena e específica de arquivos. Em projetos com muitos arquivos, padrões como `include` costumam ser mais convenientes.

Se um arquivo listado em `files` não existir, o compilador poderá informar um erro.

### 🔗 Arquivos importados também podem participar da análise

A seleção inicial não é o único mecanismo que determina os arquivos considerados pelo compilador.

Imagine que um arquivo selecionado tenha uma importação como:

```ts
import { calcularTotal } from "./calcularTotal";
```

Para analisar essa importação, o TypeScript precisa localizar o módulo correspondente e considerar os arquivos necessários para resolver e verificar a relação entre eles.

Assim, um arquivo que não foi selecionado diretamente por `include` ainda poderá fazer parte do programa por ser importado por outro arquivo.

O mesmo princípio ajuda a explicar por que `exclude` não impede necessariamente a inclusão de arquivos importados.

Além dos arquivos `.ts` selecionados e dos arquivos alcançados por importações, o compilador pode considerar arquivos de declaração de tipos e bibliotecas necessárias à verificação. Portanto, a lista efetiva de arquivos pode ser maior do que a lista inicial definida pelos padrões de seleção.

### 🧠 Resumindo as diferenças

| Propriedade | Função |
|---|---|
| `include` | Seleciona arquivos por meio de padrões. |
| `exclude` | Retira arquivos e diretórios da seleção inicial por padrões. |
| `files` | Declara explicitamente arquivos de entrada. |
| Importações | Podem fazer com que outros arquivos sejam incluídos na análise. |

Essas propriedades não devem ser confundidas com `compilerOptions`, que reúne as opções de comportamento do compilador.

---

## 🧪 Utilizando o `tsconfig.json` na prática

Depois de criar e configurar o arquivo, podemos executar o compilador de maneiras diferentes.

A principal distinção é saber se estamos solicitando uma verificação baseada no projeto ou informando arquivos diretamente na linha de comando.

### ▶️ Executando o `tsc` sem informar um arquivo

Na raiz do repositório, execute:

```bash
npx tsc
```

Quando o compilador é executado sem arquivos de entrada informados diretamente, ele procura o `tsconfig.json` aplicável e utiliza suas configurações e regras de seleção de arquivos.

Nesse cenário, opções como `include`, `exclude`, `strict`, `target`, `module` e `outDir` podem orientar o processamento do projeto.

Se a configuração estiver preparada para gerar arquivos JavaScript, o compilador poderá produzi-los no diretório definido em `outDir`.

Se `noEmit` estiver definido como `true`, a geração dos arquivos será desabilitada.

### 🕵️ Analisando os erros de implantação

Este documento contém as informações mais atuais de implantação e configuração que podem ser utilizadas em um **ambiente de desenvolvimento** com `TypeScript`. No entanto, ferramentas, configurações e versões evoluem constantemente. Por isso, a leitura de logs de erro é uma prática comum para todos aqueles que desejam trabalhar com tecnologia.

Neste momento, **não precisa se assustar**. Vamos corrigir todos os pontos encontrados. Porém, se porventura as mensagens de erro forem diferentes, ou se você estiver utilizando uma versão mais recente do que a utilizada neste guia, o que é recomendado, basta aplicar o mesmo processo de análise apresentado aqui.

> Não esperava que esse erro acontecesse, mas decidi não corrigir o guia para demonstrar como lidar com situações desse tipo.

Veja o comando abaixo:

```bash
npx tsc
```

Agora veja a saída de erro:

```bash
tsconfig.json:7:5 - error TS5011: The common source directory of 'tsconfig.json' is './src'. The 'rootDir' setting must be explicitly set to this or another path to adjust your output's file layout.
  Visit https://aka.ms/ts6 for migration information.

7     "outDir": "./dist/ecma2022",
      ~~~~~~~~

Found 1 error in tsconfig.json:
```

Perceba o que o log está nos informando:

`The common source directory of 'tsconfig.json' is './src'. The 'rootDir' setting must be explicitly set to this or another path to adjust your output's file layout.`

Mas o que isso significa?

Adicionamos a propriedade `outDir` desta forma:

```json
"outDir": "./dist/ecma2022"
```

O próprio log informa que precisamos definir explicitamente a propriedade `rootDir`. Portanto, basta configurá-la. Caso essa linha já exista no seu `tsconfig.json` e esteja comentada, apenas descomente-a.

```json
"rootDir": "./src",
```

Agora execute novamente:

```bash
npx tsc
```

Veja que agora aparecerá uma nova mensagem de erro. Isso é uma boa notícia, pois significa que eliminamos o erro anterior.

```bash
src/01-first-typescript-execution/Pessoa.ts:20:9 - error TS2322: Type 'string | undefined' is not assignable to type 'string'.
  Type 'undefined' is not assignable to type 'string'.

20         this.ultimoNome = partesDoNome.length > 1 ? partesDoNome[partesDoNome.length - 1] : "";
```

Precisamos agir com consciência e inteligência. Qualquer ferramenta de IA ou uma pesquisa no Google provavelmente irá sugerir a alteração do código apresentado na linha 20. **Mas não vamos fazer isso.**

Pense comigo: quando executamos o comando abaixo no documento anterior, tudo funcionou normalmente:

```bash
npx tsc src/02-typescript-environment-and-dependencies/Pessoa.ts --target ES2015 --module commonjs --outDir dist/es2015
```

Estamos trabalhando justamente na configuração do `tsconfig.json` para deixar de informar todos esses parâmetros na linha de comando. Nesse momento, não faz sentido modificar o código da aplicação. O que estamos alterando é o ambiente de compilação. E quem está implantando e configurando esse ambiente somos nós.

**Essa é a nossa responsabilidade.**

Mesmo que você não conheça TypeScript, observe que o log está informando apenas que um determinado valor não pode ser atribuído a outro. Você não precisa compreender todos os detalhes internos da linguagem neste momento. Basta perceber que o compilador está sendo mais rigoroso do que era anteriormente.

Ou seja, estamos configurando o ambiente de forma mais restritiva do que no comando executado no documento anterior. Volte ao exemplo do `tsconfig.json` e procure algo que possa tornar essa validação menos rígida.

Existe uma propriedade chamada `"strict"` configurada com o valor `true`. Vamos alterá-la para `false`.

```json
"strict": false,
```

Execute mais uma vez:

```bash
npx tsc
```

Veja a nova mensagem de erro:

```bash
tsconfig.json:27:5 - error TS5052: Option 'exactOptionalPropertyTypes' cannot be specified without specifying option 'strictNullChecks'.

27     "exactOptionalPropertyTypes": true,
       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Found 1 error in tsconfig.json:27
```

Que ótima notícia! O erro mudou.

Quando um erro desaparece e surge outro diferente, normalmente significa que avançamos na direção correta.

Agora o log informa que a propriedade `exactOptionalPropertyTypes` não pode ser utilizada sem outra configuração relacionada. Temos uma pista. Vamos observar a seção onde essa propriedade está localizada:

```json
// Stricter Typechecking Options
"noUncheckedIndexedAccess": true,
"exactOptionalPropertyTypes": true,
```

O próprio comentário informa que estamos em uma seção relacionada a verificações mais rigorosas de tipos.

Acabamos de desativar a configuração `strict`. Portanto, faz sentido que opções associadas a verificações mais rigorosas também precisem ser ajustadas.

Vamos alterar:

```json
"exactOptionalPropertyTypes": false,
```

Execute novamente:

```bash
npx tsc
```

Observe que conseguimos resolver todos os problemas sem pesquisar no Google e sem conhecer previamente todas as opções do arquivo de configuração. Em vez de procurar imediatamente uma solução pronta, analisamos as informações fornecidas pelo próprio compilador e seguimos as pistas apresentadas em cada mensagem de erro.

É bem provável que uma pesquisa rápida levasse à sugestão de alterar o código da aplicação. No entanto, neste cenário específico, o problema não estava no código, mas sim na forma como o ambiente de compilação estava configurado.

O principal objetivo desta demonstração não é a resolução do problema em si. O objetivo é mostrar como uma pessoa experiente aborda um problema que nunca viu antes.

Há vários anos, eu também me assustava ao encontrar mensagens de erro desconhecidas. Frequentemente pedia ajuda para alguém ou passava horas, às vezes dias, pesquisando possíveis soluções. Com o tempo, comecei a observar como profissionais mais experientes lidavam com situações semelhantes.

O que mais me chamou atenção foi perceber que eles raramente conheciam a resposta de imediato. Em vez disso, investigavam o problema, analisavam os sintomas, formulavam hipóteses e validavam cada passo até encontrar a causa.

No fundo, é o mesmo raciocínio utilizado por um mecânico ao diagnosticar um defeito em um carro, por um médico ao investigar um sintoma ou por um encanador ao localizar um vazamento. A experiência não está em conhecer todos os problemas possíveis, mas em desenvolver um método para descobrir a solução mesmo quando o problema é completamente novo.

### ▶️ Executando o JavaScript gerado

Após corrigir os problemas de configuração do projeto, podemos solicitar novamente a compilação:

```bash
npx tsc
```

Se o processo for concluído sem erros, os arquivos JavaScript serão gerados no diretório configurado em `outDir`.

Neste capítulo, definimos:

```json
"outDir": "./dist/ecma2022"
```

Portanto, o arquivo:

```text
src/02-typescript-environment-and-dependencies/Pessoa.ts
```

será transformado em:

```text
dist/ecma2022/02-typescript-environment-and-dependencies/Pessoa.js
```

Agora podemos executar o arquivo JavaScript gerado utilizando o Node.js:

```bash
node dist/ecma2022/02-typescript-environment-and-dependencies/Pessoa.js
```

Se tudo estiver configurado corretamente, o Node.js executará o código compilado e apresentará a saída produzida pelo programa.

Observe que, neste momento, o TypeScript já não participa mais da execução. O processo de verificação de tipos e transformação do código já foi concluído anteriormente pelo compilador. O arquivo executado pelo Node.js é apenas JavaScript.

Esse é um ponto importante: o TypeScript atua durante o desenvolvimento e a compilação. Após a geração dos arquivos `.js`, a execução é realizada normalmente pelo ambiente JavaScript escolhido, neste caso, o Node.js.


### 🔍 Informando um arquivo diretamente ao compilador

No documento anterior, utilizamos um comando como:

```bash
npx tsc src/02-typescript-environment-and-dependencies/Pessoa.ts --target ES2022 --module commonjs --outDir dist/ecma2022
```

Nesse caso, o arquivo é informado diretamente na linha de comando.

**Quando os arquivos de entrada são informados dessa maneira, o `tsconfig.json` é ignorado para essa execução.** Por isso, não devemos presumir que as opções e os padrões de seleção do projeto serão aplicados automaticamente.

Essa diferença será aprofundada no próximo documento, que tratará dos argumentos do `tsc`, da compilação de arquivos e do comportamento do compilador ao receber entradas explícitas.

### 📦 Executando pelos scripts do `package.json`

No projeto, temos scripts como estes:

```json
{
  "scripts": {
    "check": "tsc --noEmit",
    "dev": "tsx",
    "start": "tsc --noEmit && tsx"
  }
}
```

Os scripts permitem reunir comandos frequentes e executá-los com nomes mais simples.

Para verificar o projeto:

```bash
npm run check
```

O script executa `tsc --noEmit` sem informar um arquivo de entrada. Dessa forma, o compilador utiliza o contexto do projeto e não gera arquivos JavaScript.

Para executar `Pessoa.ts` com `tsx`:

```bash
npm run dev -- src/02-typescript-environment-and-dependencies/Pessoa.ts
```

O separador `--` indica ao npm que os argumentos seguintes devem ser encaminhados ao comando do script. Nesse exemplo, o caminho do arquivo é repassado ao `tsx`.

Para verificar o projeto antes de executar o arquivo:

```bash
npm start -- src/02-typescript-environment-and-dependencies/Pessoa.ts
```

O script `start` executa primeiro `tsc --noEmit` e, se essa etapa terminar com sucesso, executa `tsx` com o caminho informado.

O operador `&&` impede que o segundo comando seja executado quando o primeiro termina com um código de saída diferente de zero.

É importante observar que `npm run check` e a primeira etapa de `npm start` verificam o projeto no contexto de configuração aplicável. Eles não se limitam necessariamente ao arquivo passado ao `tsx`.

> 💡 **Uma diferença importante:** `npm run` é o comando utilizado para executar scripts definidos no `package.json`. `npx` é utilizado para invocar executáveis de pacotes, como `npx tsc` e `npx tsx`. São formas diferentes de chamar ferramentas.

---

## 🔬 Como descobrir o que o compilador está fazendo?

Em projetos com vários arquivos, pode ser difícil saber exatamente qual configuração está sendo aplicada e quais arquivos estão sendo analisados.

O TypeScript oferece comandos de diagnóstico que ajudam a investigar esse comportamento.

### 🧾 Consultando a configuração efetiva

Execute:

```bash
npx tsc --showConfig
```

Esse comando apresenta a configuração efetiva do projeto, considerando o `tsconfig.json` e as configurações relacionadas que forem aplicáveis.

Ele ajuda a conferir se opções como `strict`, `noEmit`, `target`, `module` e `outDir` estão configuradas conforme o esperado.

### 📂 Listando os arquivos selecionados

Execute:

```bash
npx tsc --listFilesOnly
```

Esse comando lista os arquivos que fariam parte da compilação e encerra o processamento sem prosseguir com a geração normal da saída.

A listagem pode incluir arquivos de origem, arquivos alcançados por importações e declarações de tipos ou bibliotecas necessárias ao compilador.

Ao analisar a saída, compare os caminhos apresentados com a estrutura de diretórios do repositório.

Se um arquivo esperado não aparecer, será necessário investigar a configuração e as relações de importação. Se aparecer um arquivo inesperado, verifique os padrões de seleção e a origem de sua inclusão.

Esses comandos tornam a investigação mais objetiva: em vez de presumir quais opções e arquivos estão sendo considerados, podemos consultar o próprio compilador.

---

## 🧩 Exercício prático

Agora é hora de examinar a configuração do projeto e observar seu comportamento.

### 📋 Etapas

- [ ] Verifique se existe um `tsconfig.json` na raiz do repositório. Se não existir, crie-o com `npx tsc --init`.
- [ ] Abra o arquivo e localize a seção `compilerOptions`.
- [ ] Identifique onde estão configurados `target`, `module`, `strict`, `noEmit` e `outDir`.
- [ ] Confira como `include`, `exclude` e `files` estão definidos, caso essas propriedades estejam presentes.
- [ ] Execute `npx tsc --showConfig` e examine a configuração efetiva.
- [ ] Execute `npx tsc --listFilesOnly` e observe os arquivos apresentados.
- [ ] Compare os caminhos listados com a estrutura de `src/`.
- [ ] Execute `npm run check` e observe como o script utiliza o compilador sem gerar arquivos JavaScript.
- [ ] Se a configuração estiver preparada para emissão, execute `npx tsc` e verifique o diretório de saída definido em `outDir`.

### 🔎 Perguntas para reflexão

1. Qual é a diferença entre executar `npx tsc` e executar `npx tsc src/02-typescript-environment-and-dependencies/Pessoa.ts`?
2. O que acontece com a geração de arquivos quando `noEmit` está definido como `true`?
3. Qual é a diferença entre `target` e `outDir`?
4. Por que um arquivo excluído por `exclude` ainda pode participar da análise?
5. Como os comandos `--showConfig` e `--listFilesOnly` ajudam a investigar o comportamento do compilador?

Ao responder a essas perguntas, você terá uma visão mais clara de como o TypeScript organiza a configuração do projeto e determina os arquivos que precisa analisar.

---

## 🧠 Consolidando o aprendizado

O `tsconfig.json` permite centralizar as configurações do compilador e os padrões de seleção de arquivos de um projeto TypeScript.

As opções `target` e `module` controlam aspectos da saída gerada; `strict` ativa verificações rigorosas de tipos; `noEmit` controla a emissão de arquivos; e `outDir` define o diretório de destino dos arquivos gerados.

Já `include`, `exclude` e `files` ajudam a definir os arquivos de entrada, mas a análise também pode alcançar arquivos importados e declarações necessárias ao programa.

Por fim, a forma de executar o compilador faz diferença: quando não informamos arquivos de entrada diretamente, o TypeScript pode utilizar a configuração do projeto. Quando fornecemos arquivos na linha de comando, o `tsconfig.json` é ignorado para aquela execução.

Compreender essa distinção prepara o caminho para o próximo documento, no qual veremos como os argumentos do `tsc` influenciam a compilação.

---

## 📚 Leitura complementar

Para aprofundar os conceitos apresentados, consulte a documentação oficial:

- 📘 [TypeScript — tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
- ⚙️ [TypeScript — TSConfig Reference](https://www.typescriptlang.org/tsconfig/)
- 🛠️ [TypeScript — Opções da linha de comando do tsc](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
- 📂 [TypeScript — Opção files](https://www.typescriptlang.org/tsconfig/files.html)

---

## 🤝 Contribuições

Se este projeto ajudou ou inspirou você, considere deixar uma estrela ⭐ no repositório!

Sinta-se à vontade para abrir *issues* com sugestões, correções ou dúvidas. Este repositório é um espaço voltado à evolução constante e à consolidação de boas práticas no desenvolvimento de software com TypeScript.

Toda colaboração construtiva será analisada com atenção.

---

## 🔗 Navegação rápida

⬅️ Retornar à [`06 - TypeScript: Compilação e Execução com tsc e tsx`](./6-typescript-e-execucao-com-tsc-e-tsx.pt-BR.md)

➡️ Avançar para [`08 - tsc: Argumentos, Arquivos e Projetos`](./8-tsc-argumentos-e-compilacao-de-projetos.pt-BR.md)

🏠 Retornar ao [`README principal do repositório`](https://github.com/AntonioJavaDeveloper/mastering-typescript/blob/main/README.pt-BR.md)

---

## 📫 Contato

Caso queira trocar experiências sobre desenvolvimento de software, arquitetura de aplicações, Java, TypeScript ou tecnologia em geral, você pode me encontrar através dos canais abaixo:

- 🌐 [javadeveloper.com.br](https://javadeveloper.com.br/)
- 💼 [LinkedIn](https://www.linkedin.com/in/antonio-javadeveloper/)
- 📧 [antonio@javadeveloper.com.br](mailto:antonio@javadeveloper.com.br)

> Developed by [AntonioJavaDeveloper](https://github.com/AntonioJavaDeveloper)
