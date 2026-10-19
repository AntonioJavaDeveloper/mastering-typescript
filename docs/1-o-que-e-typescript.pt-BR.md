
# 01 - O que é TypeScript?

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](../LICENSE)
[![Stars](https://img.shields.io/github/stars/AntonioJavaDeveloper/mastering-typescript?style=social)](https://github.com/AntonioJavaDeveloper/mastering-typescript/stargazers)
[![Forks](https://img.shields.io/github/forks/AntonioJavaDeveloper/mastering-typescript?style=social)](https://github.com/AntonioJavaDeveloper/mastering-typescript/network/members)

---

## 🧭 Navegação

📂 [`README principal do repositório`](https://github.com/AntonioJavaDeveloper/mastering-typescript/blob/main/README.pt-BR.md)  
└── 📁 [`Introdução do capítulo`](../README.pt-BR.md)  
&emsp;&emsp;├── [`01 - O que é TypeScript?`](./1-o-que-e-typescript.pt-BR.md) ← **você está aqui**  
&emsp;&emsp;└── [`02 - Primeira Execução de uma Aplicação TypeScript`](./2-primeira-execucao.pt-BR.md)

---

## 📖 Introdução

<figure>
  <img src="https://raw.githubusercontent.com/AntonioJavaDeveloper/assets/refs/heads/main/mastering-typescript/01-first-typescript-execution/typescript-logo.png" alt="Logotipo do TypeScript" width="180">
</figure>

O TypeScript é uma linguagem que amplia o JavaScript com recursos de tipagem estática, permitindo identificar determinadas inconsistências no código antes de sua execução. Seu uso contribui para a construção de aplicações mais previsíveis, organizadas e fáceis de manter.

Para compreender como uma aplicação TypeScript funciona, é necessário conhecer sua relação com o JavaScript e entender como o código escrito nessa linguagem é transformado para ser executado nos ambientes convencionais.

Este documento apresenta os conceitos fundamentais do TypeScript, explica o processo de transpilação e introduz o papel do ambiente de execução utilizado no desenvolvimento de aplicações.

O objetivo é estabelecer uma base conceitual para acompanhar os exemplos práticos do capítulo, sem aprofundar neste momento a instalação ou o gerenciamento das ferramentas de desenvolvimento.

---

## 🎯 O que será abordado

Ao longo deste documento, serão explorados três conceitos fundamentais:

- 🧩 **TypeScript e JavaScript:** a relação entre as duas linguagens e a finalidade da tipagem estática.
- ⚙️ **Transpilação:** como o código TypeScript é transformado em JavaScript.
- 🖥️ **Ambiente de execução:** como o navegador e o Node.js executam JavaScript.

---

## 📘 O que é TypeScript?

O TypeScript é uma linguagem de programação desenvolvida pela Microsoft e baseada no JavaScript. Sua principal característica é adicionar um sistema de tipos que permite declarar e verificar os tipos de dados utilizados no código.

A linguagem mantém compatibilidade com o ecossistema JavaScript e oferece recursos que auxiliam na organização e na análise estática de aplicações.

### 🔗 Relação entre TypeScript e JavaScript

O TypeScript foi projetado para ampliar o JavaScript, preservando sua integração com as bibliotecas, os frameworks e as ferramentas desse ecossistema.

Enquanto o JavaScript permite desenvolver aplicações sem a necessidade de declarar explicitamente os tipos das variáveis, o TypeScript possibilita especificar esses tipos e verificar se determinadas operações são compatíveis com as declarações realizadas.

Considere o exemplo em JavaScript:

```javascript
function somar(a, b) {
    return a + b;
}

console.log(somar(10, 20));
```

A função recebe dois parâmetros e retorna o resultado da operação. Entretanto, os parâmetros não possuem tipos explicitamente declarados.

A mesma função pode ser escrita em TypeScript:

```typescript
function somar(a: number, b: number): number {
    return a + b;
}

console.log(somar(10, 20));
```

Nesse exemplo, o tipo `number` indica que os parâmetros `a` e `b`, assim como o valor retornado pela função, devem ser números.

A declaração dos tipos permite que as ferramentas do TypeScript identifiquem incompatibilidades durante a análise do código, antes de sua execução.

> 💡 **Ponto importante:** O TypeScript amplia o JavaScript com recursos como a tipagem estática. No fluxo tradicional, seu código é transformado em JavaScript, que pode então ser executado em ambientes compatíveis, como navegadores e Node.js.

### 🧩 Tipagem estática como recurso da linguagem

A tipagem estática permite verificar a compatibilidade entre os tipos declarados e as operações realizadas no código durante a análise estática.

Por exemplo:

```typescript
let idade: number = 30;

idade = 35;

// Atribuição incompatível com o tipo declarado causando erro.
idade = "trinta";
```

A variável `idade` foi declarada com o tipo `number`. Por esse motivo, a atribuição de uma string é identificada como incompatível pelo sistema de tipos do TypeScript.

Esse tipo de verificação contribui para identificar erros antes da execução, facilitando a manutenção e reduzindo determinadas classes de inconsistências.

Entretanto, a tipagem estática não garante a ausência de erros em uma aplicação. Problemas de lógica, falhas durante a execução e dados externos inesperados ainda precisam ser tratados adequadamente.

> **Importante:** Outro aspecto é que as declarações de tipos do TypeScript são removidas durante a transformação do código para JavaScript. Portanto, a tipagem estática não representa, por si só, uma validação automática dos dados durante a execução. *Iremos nos apronfundar sobre esse assunto mais adiante nesse capítulo e principalmente no próximo.*

---

## ⚙️ Como o TypeScript é executado?

O código TypeScript utiliza recursos que não fazem parte necessariamente da sintaxe JavaScript reconhecida pelos ambientes de execução. Por isso, o fluxo convencional de desenvolvimento envolve uma etapa de transformação do código.

Essa etapa permite converter o código TypeScript em JavaScript, que poderá ser executado em ambientes compatíveis com a linguagem de destino.

### 🔄 O que é transpilação?

Transpilação é o processo de transformar o código-fonte de uma linguagem ou versão de linguagem em código-fonte de outra linguagem ou versão relacionada.

No contexto do TypeScript, a transpilação converte arquivos `.ts` em arquivos JavaScript, normalmente com a extensão `.js`.

Durante esse processo, as declarações de tipos são removidas e os recursos utilizados no código são transformados conforme as opções de compilação configuradas para o projeto.

O resultado é um código JavaScript que poderá ser interpretado ou executado pelo ambiente de destino, desde que seja compatível com os recursos utilizados.

### 📝 Transformação do código TypeScript em JavaScript

Considere o seguinte arquivo TypeScript:

```typescript
const mensagem: string = "Olá, TypeScript!";

console.log(mensagem);
```

O arquivo contém uma declaração de variável com o tipo explícito `string`.

Após a transformação, o JavaScript resultante poderá ser semelhante a este:

```javascript
const mensagem = "Olá, TypeScript!";

console.log(mensagem);
```

Observe que a declaração `: string` não aparece no código JavaScript gerado. A informação de tipo foi utilizada durante a análise do TypeScript, mas não é preservada como uma declaração de tipo no resultado convencional da transpilação.

A transformação também pode adaptar outros recursos da linguagem conforme a configuração de destino. Por esse motivo, o resultado exato depende das opções de compilação utilizadas.

> ✨ **Observação importante:** A verificação de tipos e a transpilação são etapas relacionadas, mas conceitualmente distintas. Em uma configuração padrão, erros de tipagem não impedem a geração do JavaScript. Assim, mesmo que o TypeScript reporte erros durante a análise estática, o código poderá ser convertido e executado, o que reforça que a segurança de tipos existe apenas em tempo de desenvolvimento e não em tempo de execução. 
>
>*No próximo capítulo, veremos como configurar o TypeScript para bloquear a emissão de arquivos JavaScript quando forem detectados erros durante a verificação estática do código, como incompatibilidades de tipos e acessos indevidos a atributos ou métodos privados.*

### 🔍 Diferença entre transpilação e execução

Embora sejam etapas relacionadas, transpilação e execução representam operações distintas.

- **Transpilação:** transforma o código TypeScript em JavaScript.
- **Execução:** processa o código JavaScript em um ambiente compatível, realizando as operações definidas pela aplicação.

O fluxo convencional pode ser representado visualmente:

```text
┌─────────────────────────┐
│ Código TypeScript (.ts) │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│ Análise e transpilação  │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│ Código JavaScript (.js) │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│ Ambiente de execução    │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│ Resultado da aplicação  │
└─────────────────────────┘
```

A transpilação prepara o código para o ambiente de destino, enquanto a execução realiza as instruções da aplicação.

É importante observar que algumas ferramentas conseguem combinar essas etapas do ponto de vista do desenvolvedor, permitindo executar arquivos TypeScript diretamente por meio de um comando. Isso não significa, necessariamente, que o ambiente de execução esteja interpretando nativamente todas as declarações de tipos do TypeScript.

---

## 🖥️ O papel do ambiente de execução

O ambiente de execução é responsável por processar o código JavaScript e disponibilizar os recursos necessários para que a aplicação funcione.

Entre os ambientes mais conhecidos estão os navegadores e o Node.js. Ambos permitem executar JavaScript, mas oferecem recursos e APIs diferentes, conforme suas finalidades.

### 🌐 Por que o navegador e o Node.js executam JavaScript?

Os navegadores modernos possuem mecanismos capazes de executar JavaScript. Essa capacidade permite implementar comportamentos interativos em páginas web, manipular elementos da interface e realizar operações disponibilizadas pelas APIs do navegador.

O Node.js, por sua vez, é um ambiente de execução JavaScript desenvolvido para executar código fora do navegador. Ele utiliza o mecanismo V8, também empregado pelo Google Chrome, e disponibiliza APIs voltadas a operações como acesso ao sistema de arquivos, comunicação em rede e desenvolvimento de aplicações de servidor.

Apesar de compartilharem a capacidade de executar JavaScript, navegadores e Node.js não disponibilizam exatamente os mesmos recursos. APIs específicas do navegador, como `document`, não estão disponíveis automaticamente no Node.js. Da mesma forma, recursos próprios do Node.js, como o módulo `node:fs`, não fazem parte das APIs convencionais dos navegadores.

**Apronfundaremos sobre esse assunto no próximo capítulo. E ainda faremos a relação do Node.js e JavaScript com ECMAScript**

### 🟢 Introdução ao papel do Node.js neste projeto

Neste repositório, o Node.js é utilizado como ambiente de execução para os exemplos desenvolvidos em TypeScript.

Ele permite executar os arquivos JavaScript gerados durante o processo de transformação e disponibiliza recursos necessários para o funcionamento das ferramentas de desenvolvimento utilizadas pelo projeto.

O Node.js também faz parte do ambiente preparado para acompanhar os exemplos dos capítulos. Dessa forma, é possível estudar os conceitos da linguagem e observar o comportamento dos programas em um ambiente consistente.

A configuração detalhada do ambiente, a instalação das dependências e o papel das ferramentas utilizadas para executar arquivos TypeScript serão abordados no capítulo seguinte.

---

## 📚 Leitura complementar

Para aprofundar os conceitos apresentados neste documento, consulte a documentação oficial:

- 📘 [TypeScript — Documentação oficial](https://www.typescriptlang.org/docs/)
- 🧭 [TypeScript — O que é TypeScript?](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)
- 📖 [TypeScript — Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- 🟢 [Node.js — Documentação oficial](https://nodejs.org/docs/latest/api/)
- 🌐 [MDN — JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

Esses materiais apresentam explicações adicionais sobre a linguagem, seu sistema de tipos, sua relação com JavaScript e os ambientes utilizados para executar aplicações.

---

## 📬 Contribuições

Se este projeto te ajudou ou inspirou, considere deixar uma estrela ⭐ no repositório!

Sinta-se à vontade para abrir *issues* com sugestões, correções ou dúvidas. Este repositório é um espaço voltado à **evolução constante** e à consolidação de boas práticas no desenvolvimento com TypeScript.

Toda colaboração construtiva será analisada com atenção.

---

## 🔗 Navegação Rápida

⬅️ Retornar à [introdução do capítulo](../README.pt-BR.md)

➡️ Avançar para [`02 - Primeira Execução de uma Aplicação TypeScript`](./2-primeira-execucao.pt-BR.md)

⬅️ Retornar ao [README principal do repositório](https://github.com/AntonioJavaDeveloper/mastering-typescript/blob/main/README.pt-BR.md)

---

## 📫 Contato

Caso queira trocar experiências sobre desenvolvimento de software, arquitetura de aplicações, Java, TypeScript ou tecnologia em geral, você pode me encontrar através dos canais abaixo:

- 🌐 [https://javadeveloper.com.br/](https://javadeveloper.com.br/)
- 💼 [LinkedIn](https://www.linkedin.com/in/antonio-javadeveloper/)
- 📧 [antonio@javadeveloper.com.br](mailto:antonio@javadeveloper.com.br)

> Developed by [AntonioJavaDeveloper](https://github.com/AntonioJavaDeveloper)
