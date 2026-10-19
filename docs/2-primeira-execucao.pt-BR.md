# 02 — Primeira Execução de uma Aplicação TypeScript

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](../LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/AntonioJavaDeveloper/mastering-typescript?style=social)](https://github.com/AntonioJavaDeveloper/mastering-typescript/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/AntonioJavaDeveloper/mastering-typescript?style=social)](https://github.com/AntonioJavaDeveloper/mastering-typescript/network/members)

## 🧭 Navegação

📂 [`README principal do repositório`](https://github.com/AntonioJavaDeveloper/mastering-typescript/blob/main/README.pt-BR.md)  
└── 📁 [`Introdução do capítulo`](../README.pt-BR.md)  
&emsp;&emsp;├── [`01 — O que é TypeScript?`](./1-o-que-e-typescript.pt-BR.md)  
&emsp;&emsp;└── [`02 — Primeira Execução de uma Aplicação TypeScript`](./2-primeira-execucao.pt-BR.md) ← **você está aqui**

---

## 📖 Introdução

Você já conhece os conceitos fundamentais do TypeScript e compreende sua relação com o JavaScript. Agora é hora de sair da teoria e observar uma aplicação funcionando na prática.

Neste documento, você utilizará uma classe chamada `Pessoa` para explorar o código TypeScript, executar um programa e observar os resultados apresentados no terminal.

O exemplo também permitirá experimentar uma situação em que o sistema de tipos identifica um acesso inválido e compará-la com uma operação válida. Assim, você começará a perceber como o TypeScript auxilia na identificação de determinados problemas antes da execução.

Não é necessário dominar orientação a objetos para realizar este exercício. O objetivo é conhecer o fluxo básico de trabalho e ganhar familiaridade com o ambiente de desenvolvimento.

### 🎯 Objetivos

Ao concluir esta atividade, você deverá ser capaz de:

- Localizar e identificar o arquivo TypeScript utilizado no exercício.
- Executar um programa TypeScript no ambiente preparado para o projeto.
- Observar a saída produzida no terminal.
- Reconhecer a diferença entre um acesso permitido e um acesso incompatível com a declaração `private`.
- Compreender, de maneira introdutória, a relação entre o código TypeScript e sua execução.

---

## 💻 Conhecendo o exemplo

### 📂 Arquivo utilizado

O exercício utiliza o arquivo `Pessoa.ts`, localizado no diretório de código deste capítulo:

```text
mastering-typescript/
├── docs/
│   ├── 1-o-que-e-typescript.pt-BR.md
│   └── 2-primeira-execucao.pt-BR.md
└── src/
    └── 01-first-typescript-execution/
        └── Pessoa.ts
```

Você pode consultar o arquivo diretamente no repositório:

📄 [`src/01-first-typescript-execution/Pessoa.ts`](../src/01-first-typescript-execution/Pessoa.ts)

### 🧩 O que o programa faz?

A classe `Pessoa` representa uma pessoa com nome e idade. Ela contém propriedades privadas, métodos de leitura e escrita chamados *getters* e *setters*, além de um pequeno trecho que cria um objeto e atribui valores a ele.

Veja os principais elementos do exemplo:

| Elemento | Finalidade |
|---|---|
| `class Pessoa` | Declara uma classe chamada `Pessoa`. |
| `private primeiroNome` | Armazena o primeiro nome e restringe seu acesso direto pela classe. |
| `private ultimoNome` | Armazena o último nome. |
| `private _idade` | Armazena a idade. |
| `get nome()` | Permite consultar o nome completo. |
| `set nome(...)` | Recebe o nome completo e separa a primeira e a última palavra. |
| `get idade()` e `set idade(...)` | Permitem consultar e alterar a idade. |
| `new Pessoa()` | Cria um objeto a partir da classe. |

Não se preocupe em memorizar esses conceitos agora. Eles estão presentes para dar contexto ao exemplo, e você poderá estudá-los com mais profundidade ao longo da jornada.

### 🔎 Um detalhe interessante sobre o nome

No código, a atribuição é:

```typescript
cliente.nome = "José da Silva";
```

Entretanto, o *setter* foi implementado para guardar apenas a primeira e a última palavra do nome informado. Por isso, a propriedade `nome` retornará `José Silva`, sem a palavra intermediária `da`.

Essa escolha torna o exemplo interessante porque mostra que o resultado de uma propriedade não precisa ser simplesmente o texto original atribuído a ela: o código pode processar a informação antes de armazená-la.

---

## ⚙️ Executando a aplicação

### 1. Abra o projeto no ambiente de desenvolvimento

Abra o repositório `mastering-typescript` no VS Code, utilizando o ambiente de desenvolvimento configurado para o projeto.

Certifique-se de que o terminal esteja aberto na raiz do repositório, no diretório que contém o arquivo `package.json`.

Se você estiver utilizando o Dev Container, abra o terminal integrado do VS Code dentro desse ambiente.

### 2. Prepare o exemplo para visualizar o resultado

Abra o arquivo `src/01-first-typescript-execution/Pessoa.ts`.

No final do arquivo, você encontrará duas linhas de código comentadas utilizando console.log().

```typescript
// Erro: primeiroNome é privado e não pode ser acessado diretamente.
// console.log(`Meu primeiro nome é ${cliente.primeiroNome}`);

// Funciona: acessa a propriedade nome por meio do getter.
// console.log(`Meu nome completo é ${cliente.nome}`);
```

Por enquanto, remova os comentários apenas da segunda chamada ao console.log().

```typescript
console.log(`Meu nome completo é ${cliente.nome}`);
```

Mantenha a primeira chamada ao console.log() comentada. Ele será utilizado em um experimento posterior.

### 3. Execute o programa

Para executar um arquivo TypeScript, utilizaremos o comando `npx tsx`. Neste exemplo, vamos executar o arquivo `Pessoa.ts`, localizado em `src/01-first-typescript-execution/Pessoa.ts`. Execute o comando abaixo informando o caminho completo do arquivo:

```bash
npx tsx src/01-first-typescript-execution/Pessoa.ts
```

Outra opção é acessar primeiro o diretório onde o arquivo Pessoa.ts está localizado:

```bash
cd src/01-first-typescript-execution
```

Em seguida, execute:

```bash
npx tsx Pessoa.ts
```

Em ambos os exemplos, o comando `npx tsx` é utilizado para executar o arquivo `Pessoa.ts`. A única diferença é o diretório de onde o comando é invocado, o que determina se será necessário informar o caminho completo ou apenas o nome do arquivo.

O comando utiliza o `tsx` disponível no projeto para executar o arquivo TypeScript sem exigir que você gere manualmente um arquivo JavaScript separado antes dessa execução.

**A instalação e o funcionamento detalhado dessas ferramentas serão abordados no próximo capítulo.**

### 4. Observe a saída

Se tudo estiver funcionando corretamente, você verá:

```text
Meu nome completo é José Silva
```

Parabéns! Você executou seu primeiro exemplo prático deste capítulo.

Observe que o programa não exibiu `José da Silva`, embora esse tenha sido o texto atribuído à propriedade. Isso acontece porque o *setter* mantém apenas a primeira e a última palavra.

Esse é o resultado esperado para a implementação atual da classe.

---

## 🧪 Experimento: um acesso permitido e outro inválido

Agora que você conseguiu executar o programa, vamos observar um comportamento importante do TypeScript.

### 1. Acesse a propriedade pública

No arquivo `Pessoa.ts`, o comando abaixo consulta a propriedade `nome`:

```typescript
console.log(`Meu nome completo é ${cliente.nome}`);
```

Esse acesso é permitido porque `nome` é disponibilizada por meio de um *getter* público.

### 2. Experimente acessar uma propriedade privada

Agora, localize a linha abaixo:

```typescript
console.log(`Meu nome completo é ${cliente.nome}`);
```

Adicione duas barras (`//`) no início da linha para comentá-la:

```typescript
// console.log(`Meu nome completo é ${cliente.nome}`);
```

Em seguida, localize a linha abaixo:

```typescript
// console.log(`Meu primeiro nome é ${cliente.primeiroNome}`);
```

Remova as duas barras (`//`) do início da linha:

```typescript
console.log(`Meu primeiro nome é ${cliente.primeiroNome}`);
```

Execute novamente o programa:

```bash
npx tsx src/01-first-typescript-execution/Pessoa.ts
```

Ou caso você já esteja no diretório da classe:

```bash
npx tsx Pessoa.ts
```

Você verá a seguinte saída no terminal:

```text
Meu primeiro nome é José
```

Mas espere! A propriedade `primeiroNome` foi declarada com o modificador `private`. Por que o programa funcionou?

O Visual Studio Code identifica uma tentativa de acesso inválida à propriedade privada e sinaliza o problema com um sublinhado vermelho no código. Durante a checagem estática de tipos (checagens realizada pelo TypeScript antes da execução do programa), o compilador identifica que estamos tentando acessar uma propriedade privada fora da classe em que ela foi declarada.

![Visual Studio Code indicando o acesso inválido à propriedade privada](https://raw.githubusercontent.com/AntonioJavaDeveloper/assets/refs/heads/main/mastering-typescript/01-first-typescript-execution/tsc-script-message-error.png)

*Figura 1 — O erro identificado pelo Visual Studio Code ao tentar acessar a propriedade privada.*

Mesmo com esse erro identificado, o código JavaScript ainda é gerado e o programa é executado, exibindo o resultado no terminal.

Já sabemos que a checagem estática e a transpilação são processos distintos. A checagem estática tem como objetivo analisar o código-fonte e identificar possíveis problemas sem a necessidade de executar o programa. Já a transpilação (processo de conversão do código TypeScript para JavaScript) é responsável por gerar o código que será efetivamente executado pelo ambiente de execução.

Na configuração padrão do TypeScript, a presença de erros identificados durante a checagem estática não impede a transpilação. Isso significa que, mesmo com o acesso inválido à propriedade privada sendo reportado pelo compilador, o arquivo JavaScript ainda é gerado.

![Terminal exibindo o resultado da execução](https://raw.githubusercontent.com/AntonioJavaDeveloper/assets/refs/heads/main/mastering-typescript/01-first-typescript-execution/terminal-command-output.png)

*Figura 2 — Saída da execução do programa, mesmo com o acesso inválido sinalizado pelo editor.*

**No próximo capítulo, veremos com mais detalhes como a checagem estática de tipos se relaciona com a transpilação e como configurar o TypeScript para impedir a geração de arquivos JavaScript quando forem detectados erros durante a análise do código.**

**O que aprendemos?**

Uma tentativa de acesso inválida pode ser identificada pelo editor sem impedir, necessariamente, a execução do programa. Nos próximos capítulos, vamos aprofundar esse assunto e conhecer maneiras de controlar esse comportamento.

Por enquanto, restaure o exemplo: deixe o acesso direto a `cliente.primeiroNome` comentado e mantenha ativo o acesso por meio de `cliente.nome`.

### 3. Restaure o exemplo

Depois do experimento, volte a deixar o acesso privado comentado e o acesso por meio do getter ativo:

```typescript
// console.log(`Meu primeiro nome é ${cliente.primeiroNome}`);

console.log(`Meu nome completo é ${cliente.nome}`);
```

Execute novamente e confirme que a saída esperada voltou a aparecer sem erros.

### 💡 O que aprendemos?

O experimento demonstra que o TypeScript pode identificar determinados problemas de acesso durante a verificação de tipos.

Isso não significa que todos os erros possíveis serão detectados antes da execução. Problemas de lógica, dados inesperados e falhas em operações externas ainda precisam ser tratados adequadamente.

Além disso, o modificador `private` do TypeScript não deve ser confundido com uma garantia de segurança em tempo de execução. No fluxo tradicional, essa restrição é verificada pelo sistema de tipos; ela não equivale, por si só, ao mecanismo de campos privados nativos do JavaScript, como `#primeiroNome`.

---

## ✅ Validando o ambiente

Ao terminar os exercícios, utilize esta lista para confirmar o resultado:

- [ ] O arquivo `Pessoa.ts` foi localizado no diretório correto.
- [ ] O comando `npx tsx` foi executado no terminal.
- [ ] A saída `Meu nome completo é José Silva` foi apresentada.
- [ ] O acesso direto à propriedade privada foi identificado como inválido.
- [ ] O exemplo foi restaurado para seu estado funcional.

### 🔧 Reconhecendo problemas básicos

Se o programa não funcionar como esperado, verifique alguns pontos antes de prosseguir.

**O comando informa que o arquivo não foi encontrado?**

Confira se você está na raiz do repositório e se digitou corretamente o caminho do arquivo.

**O terminal informa que `tsx` não foi encontrado?**

Verifique se as dependências do projeto foram instaladas e se o terminal está utilizando o ambiente de desenvolvimento correto. A instalação e o gerenciamento dessas ferramentas serão explicados no próximo capítulo.

**O programa apresenta um erro de TypeScript?**

Confira se o comando que acessa `cliente.primeiroNome` continua comentado. Se ele estiver ativo, o erro é esperado neste exercício.

**O programa termina sem exibir nenhuma mensagem?**

Verifique se o comando `console.log` que acessa `cliente.nome` está ativo. No arquivo original, os dois comandos de saída estão comentados.

---

## 🔄 TypeScript e JavaScript durante a execução

Neste exercício, você executou um arquivo `.ts` sem precisar criar manualmente um arquivo `.js` antes de iniciar o programa.

Isso não significa que TypeScript e JavaScript sejam a mesma linguagem, nem que o Node.js seja outra linguagem de programação.

O TypeScript acrescenta recursos como a tipagem estática ao JavaScript. Ferramentas como `tsx` permitem transformar o código durante o processo de execução, enquanto o Node.js fornece o ambiente no qual o JavaScript é executado.

No fluxo tradicional de compilação, também é possível transformar o arquivo TypeScript em JavaScript previamente e executar o resultado separadamente.

Essas diferentes formas de trabalho serão exploradas nos próximos capítulos, quando estudarmos o ambiente TypeScript e suas dependências.

---

## 📚 Leitura complementar

Para aprofundar os conceitos apresentados, consulte a documentação oficial:

- 📘 [TypeScript — Documentação oficial](https://www.typescriptlang.org/docs/)
- 📖 [TypeScript Handbook — Introdução](https://www.typescriptlang.org/docs/handbook/intro.html)
- 🧭 [TypeScript — Do zero](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)
- 🟢 [Node.js — Documentação oficial](https://nodejs.org/docs/latest/api/)
- 🌐 [JavaScript — MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

---

## 📬 Contribuições

Se este projeto te ajudou ou inspirou, considere deixar uma estrela ⭐ no repositório!

Sinta-se à vontade para abrir *issues* com sugestões, correções ou dúvidas. Este repositório é um espaço voltado à **evolução constante** e à consolidação de boas práticas no desenvolvimento com TypeScript.

Toda colaboração construtiva será analisada com atenção.

---

## 🔗 Navegação Rápida

⬅️ Retornar à [`01 — O que é TypeScript?`](./1-o-que-e-typescript.pt-BR.md)

➡️ Avançar para [Capítulo 02 — Ambiente TypeScript e Gerenciamento de Dependências](https://github.com/AntonioJavaDeveloper/mastering-typescript/tree/02-typescript-environment-and-dependencies)

🏠 Retornar ao [README principal do repositório](https://github.com/AntonioJavaDeveloper/mastering-typescript/blob/main/README.pt-BR.md)

---

## 📫 Contato

Caso queira trocar experiências sobre desenvolvimento de software, arquitetura de aplicações, Java, TypeScript ou tecnologia em geral, você pode me encontrar através dos canais abaixo:

- 🌐 [javadeveloper.com.br](https://javadeveloper.com.br/)
- 💼 [LinkedIn](https://www.linkedin.com/in/antonio-javadeveloper/)
- 📧 [antonio@javadeveloper.com.br](mailto:antonio@javadeveloper.com.br)

> Developed by [AntonioJavaDeveloper](https://github.com/AntonioJavaDeveloper)
