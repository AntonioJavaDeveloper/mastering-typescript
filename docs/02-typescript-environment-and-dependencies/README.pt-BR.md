# Mastering TypeScript

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Stars](https://img.shields.io/github/stars/AntonioJavaDeveloper/mastering-typescript?style=social)](https://github.com/AntonioJavaDeveloper/mastering-typescript/stargazers)
[![Forks](https://img.shields.io/github/forks/AntonioJavaDeveloper/mastering-typescript?style=social)](https://github.com/AntonioJavaDeveloper/mastering-typescript/network/members)

---

## 📖 Sobre este Capítulo

Este capítulo apresenta os fundamentos do ambiente de desenvolvimento TypeScript e o gerenciamento de dependências no ecossistema Node.js.

O conteúdo começa explorando a relação entre JavaScript, ECMAScript, motores JavaScript e Node.js. Em seguida, apresenta os fundamentos do TypeScript, a verificação estática de tipos e as ferramentas utilizadas para transformar e executar o código.

Ao longo dos documentos, você aprenderá a trabalhar com o npm, compreender a função do `package.json` e do `package-lock.json`, instalar dependências e utilizar ferramentas como `tsc` e `tsx`.

A parte avançada aprofunda o funcionamento do `tsconfig.json`, a seleção dos arquivos analisados pelo compilador e as diferenças entre executar um arquivo isoladamente e verificar um projeto TypeScript.

O objetivo é construir uma compreensão sólida do processo de desenvolvimento, desde os fundamentos da linguagem até a configuração do compilador e o controle da execução dos programas.

---

## ✅ Pré-requisitos

Você pode acompanhar os exemplos deste capítulo de duas maneiras: **utilizando Dev Containers (recomendado)** ou configurando o ambiente localmente.

### 🐳 Ambiente recomendado — Dev Containers

Para utilizar o ambiente conteinerizado, você precisará de:

- **Docker**
- **Visual Studio Code**
- **Git**

Os [Dev Containers](https://code.visualstudio.com/docs/devcontainers/containers) permitem definir um ambiente de desenvolvimento dentro de um contêiner, incluindo ferramentas, extensões e configurações necessárias ao projeto.

**Principais benefícios:**

- 📦 **Ambiente padronizado:** reduz diferenças de configuração entre desenvolvedores.
- ⚙️ **Preparação automatizada:** permite configurar ferramentas e extensões para o ambiente.
- 🛡️ **Isolamento:** evita a necessidade de instalar todas as ferramentas de desenvolvimento diretamente no sistema operacional.

> 💡 **Não tem Docker?** Você também pode acompanhar os exemplos utilizando uma instalação local do Node.js.

### 💻 Ambiente alternativo — Instalação local

Para executar os exemplos sem Dev Containers, você precisará de:

- **Node.js 22**
- **Visual Studio Code**

O Git é opcional. Caso não esteja instalado, você poderá baixar os arquivos do repositório diretamente pelo GitHub.

### 🧩 Extensões recomendadas para o VS Code

As extensões abaixo são opcionais e podem melhorar a experiência de desenvolvimento.

| Extensão | Finalidade |
|---|---|
| 🎨 [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme) | Facilita a identificação visual de arquivos e diretórios. |
| 🔎 [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) | Auxilia na identificação de problemas e na aplicação de regras de qualidade de código. |
| 💬 [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments) | Facilita a identificação visual de comentários no código. |
| 🌿 [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) | Facilita a consulta ao histórico do Git e a identificação de alterações. |
| 🤖 [Tabnine](https://www.tabnine.com/) | Oferece assistência de programação baseada em inteligência artificial. |

Essas extensões são recomendações para melhorar o ambiente de desenvolvimento, não requisitos para executar os exemplos.

---

## 🚀 Preparando o Ambiente

Os exemplos deste repositório podem ser obtidos por meio do Git ou pelo download manual dos arquivos no GitHub.

### Sem Git

1. Acesse o [repositório Mastering TypeScript](https://github.com/AntonioJavaDeveloper/mastering-typescript).
2. Selecione o branch `02-typescript-environment-and-dependencies` no seletor de branches.
3. Clique no botão **Code** e selecione **Download ZIP**.
4. Extraia o arquivo em um diretório de sua preferência.
5. Abra a pasta extraída no Visual Studio Code.

Cada capítulo é organizado em um branch próprio. Portanto, se você optar pelo download manual, precisará baixar os arquivos novamente quando quiser acompanhar outro capítulo.

### Com Git

Clone o repositório:

```bash
git clone https://github.com/AntonioJavaDeveloper/mastering-typescript.git
```

Entre no diretório:

```bash
cd mastering-typescript
```

Abra o projeto no Visual Studio Code:

```bash
code .
```

Depois, selecione o branch do capítulo:

```bash
git switch 02-typescript-environment-and-dependencies
```

### 🐳 Utilizando Dev Containers

Se estiver utilizando Dev Containers, abra o projeto no Visual Studio Code e selecione **Reopen in Container** quando a notificação correspondente aparecer.

Aguarde a criação do ambiente de desenvolvimento.

O objetivo é padronizar as ferramentas e configurações utilizadas durante os exercícios, reduzindo diferenças entre instalações locais.

### 📦 Instalando as dependências

Na raiz do projeto, execute:

```bash
npm install
```

O npm instalará as dependências declaradas na configuração do projeto.

Este repositório utiliza ferramentas de desenvolvimento como:

- **TypeScript:** adiciona tipagem estática ao JavaScript e permite verificar os tipos e gerar código JavaScript.
- **tsx:** permite executar arquivos TypeScript sem precisar gerar manualmente um arquivo JavaScript intermediário a cada execução.

As dependências já estão declaradas no projeto. Portanto, não é necessário instalá-las individualmente para acompanhar os exemplos.

---

## 🗂️ Organização do Capítulo

O capítulo está organizado em nove documentos de conteúdo, apresentados em uma sequência progressiva. Os seis primeiros estabelecem os fundamentos e apresentam as ferramentas; os três últimos aprofundam a configuração do compilador e a execução controlada.

### 📚 Documentos de conteúdo

| Documento | Conteúdo |
|---|---|
| [01 — JavaScript, ECMAScript, Node.js e Motores JavaScript](./1-javascript-ecmascript-nodejs-e-motores.pt-BR.md) | Compreenda a linguagem JavaScript, a especificação ECMAScript, os motores JavaScript e o ambiente de execução Node.js. |
| [02 — TypeScript e Verificação de Tipos](./2-o-que-e-typescript-e-verificacao-de-tipos.pt-BR.md) | Conheça o TypeScript, os tipos estáticos, os modificadores de acesso e o primeiro contato com o compilador `tsc`. |
| [03 — Node.js e npm](./3-nodejs-e-npm.pt-BR.md) | Entenda o ambiente de execução Node.js, o npm e o gerenciamento de pacotes. |
| [04 — Gerenciamento de Dependências com npm](./4-package-json-e-package-lock.pt-BR.md) | Explore o `package.json`, o `package-lock.json` e os diferentes tipos de dependências. |
| [05 — Instalação e Gerenciamento de Dependências](./5-instalacao-e-gerenciamento-de-dependencias.pt-BR.md) | Aprenda a instalar dependências e preparar o ambiente do projeto. |
| [06 — TypeScript: Compilação e Execução com tsc e tsx](./6-typescript-e-execucao-com-tsc-e-tsx.pt-BR.md) | Diferencie verificação de tipos, geração de JavaScript e execução de arquivos TypeScript. |
| [07 — tsconfig.json: Configuração e Seleção de Arquivos](./7-tsconfig-e-selecao-de-arquivos.pt-BR.md) | Entenda como o arquivo de configuração define opções de compilação e influencia a seleção dos arquivos analisados. |
| [08 — tsc: Argumentos, Arquivos e Projetos](./8-tsc-argumentos-e-compilacao-de-projetos.pt-BR.md) | Compare a compilação de um projeto com a análise de arquivos informados diretamente na linha de comando. |
| [09 — Verificação de Tipos e Execução Controlada](./9-verificacao-de-tipos-e-execucao-controlada.pt-BR.md) | Combine a verificação de tipos com a execução do programa e compreenda como controlar esse fluxo usando comandos e scripts do npm. |

### 🧭 Progressão do aprendizado

A sequência foi planejada para que cada documento prepare o leitor para o próximo:

1. **Fundamentos:** compreender JavaScript, ECMAScript, motores e Node.js.
2. **Tipagem:** conhecer o TypeScript e entender como os erros de tipos são identificados.
3. **Ferramentas:** aprender os papéis do Node.js e do npm.
4. **Dependências:** compreender como os pacotes são declarados, registrados e instalados.
5. **Execução:** conhecer o `tsc`, o `tsx` e as diferentes etapas do processamento do código.
6. **Configuração avançada:** entender o `tsconfig.json` e a seleção dos arquivos analisados.
7. **Compilação:** identificar como os argumentos da linha de comando influenciam o comportamento do compilador.
8. **Execução controlada:** impedir que o programa seja executado quando a verificação de tipos falhar.

### 📁 Organização dos exemplos de código

Os documentos Markdown ficam na raiz do branch, enquanto os exemplos TypeScript são organizados no diretório `src/`.

```text
02-typescript-environment-and-dependencies/
└── docs/
|    └── 02-typescript-environment-and-dependencies/
|        └── README.pt-BR.md
|        ├── 1-javascript-ecmascript-nodejs-e-motores.pt-BR.md
|        ├── 2-o-que-e-typescript-e-verificacao-de-tipos.pt-BR.md
|        ├── 3-nodejs-e-npm.pt-BR.md
|        ├── 4-package-json-e-package-lock.pt-BR.md
|        ├── 5-instalacao-e-gerenciamento-de-dependencias.pt-BR.md
|        ├── 6-typescript-e-execucao-com-tsc-e-tsx.pt-BR.md
|        ├── 7-tsconfig-e-selecao-de-arquivos.pt-BR.md
|        ├── 8-tsc-argumentos-e-compilacao-de-projetos.pt-BR.md
|        └── 9-verificacao-de-tipos-e-execucao-controlada.pt-BR.md
└── src/
    └── 02-typescript-environment-and-dependencies/
        └── Pessoa.ts
```

O arquivo `Pessoa.ts` será utilizado em diferentes exercícios para demonstrar conceitos de tipagem, modificadores de acesso, verificação estática e execução.

---

## 📚 Organização do Repositório

Este repositório é organizado em **capítulos temáticos**, cada um dedicado a um aspecto específico do TypeScript. Os conteúdos evoluem gradualmente, dos primeiros exemplos até os recursos mais avançados da linguagem e suas ferramentas.

Para facilitar a navegação e a manutenção da documentação, cada capítulo possui um branch próprio.

### 📌 Estrutura dos branches

- O branch `main` funciona como índice central do projeto e apresenta a organização geral do repositório.
- Cada capítulo possui um branch identificado por um prefixo numérico e um nome em inglês.
- Conforme a complexidade do assunto, um capítulo pode conter vários documentos Markdown.
- A documentação é organizada em português (`README.pt-BR.md`) e inglês (`README.md`).


## 🤝 Contribuições

Se este projeto ajudou você a aprender ou aprofundar seus conhecimentos, considere dar uma estrela ⭐ ao repositório!

Fique à vontade para abrir *issues* com sugestões, correções ou perguntas. Este repositório é um espaço dedicado à melhoria contínua e à consolidação de boas práticas no desenvolvimento com TypeScript.

Todas as contribuições construtivas são bem-vindas.

---

## 🔗 Navegação Rápida

➡️ [Começar o capítulo — 01: JavaScript, ECMAScript, Node.js e Motores JavaScript](./1-javascript-ecmascript-nodejs-e-motores.pt-BR.md)

🏠 [Voltar ao repositório principal](https://github.com/AntonioJavaDeveloper/mastering-typescript)

---

## 📫 Contato

Se quiser trocar ideias sobre desenvolvimento de software, arquitetura de aplicações, Java, TypeScript ou tecnologia em geral, entre em contato pelos canais abaixo:

- 🌐 [javadeveloper.com.br](https://javadeveloper.com.br/)
- 💼 [LinkedIn](https://www.linkedin.com/in/antonio-javadeveloper/)
- 📧 antonio@javadeveloper.com.br

> Desenvolvido por [AntonioJavaDeveloper](https://github.com/AntonioJavaDeveloper)
