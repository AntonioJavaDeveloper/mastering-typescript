# Mastering TypeScript

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Stars](https://img.shields.io/github/stars/AntonioJavaDeveloper/mastering-typescript?style=social)](https://github.com/AntonioJavaDeveloper/mastering-typescript/stargazers)
[![Forks](https://img.shields.io/github/forks/AntonioJavaDeveloper/mastering-typescript?style=social)](https://github.com/AntonioJavaDeveloper/mastering-typescript/network/members)

---

## 📖 Sobre o Repositório

Este repositório apresenta uma coleção de conceitos, recursos e práticas fundamentais para o desenvolvimento de aplicações utilizando TypeScript. Os capítulos exploram desde os elementos essenciais da linguagem até funcionalidades avançadas relacionadas à tipagem estática, orientação a objetos, generics, módulos, decorators e organização de código em aplicações modernas.

Os exemplos são estruturados de forma incremental, permitindo compreender a evolução dos recursos oferecidos pelo TypeScript e sua integração com o ecossistema JavaScript. Cada capítulo aborda um tema específico, demonstrando cenários práticos que contribuem para a escrita de código mais seguro, previsível e de fácil manutenção.

Para facilitar a reprodução dos exemplos, o repositório disponibiliza um ambiente de desenvolvimento padronizado baseado em containers, permitindo que os projetos sejam executados de forma consistente independentemente do sistema operacional utilizado.

O objetivo é oferecer uma referência técnica consolidada para profissionais que desejam aprofundar seus conhecimentos em TypeScript, com foco em boas práticas, legibilidade, escalabilidade e qualidade de software.

---

## ✅ Pré-requisitos

Você pode executar os exemplos deste repositório de duas formas: **utilizando Dev Containers (recomendado)** ou configurando o ambiente localmente.

### 🐳 Ambiente recomendado — Dev Containers

Para utilizar o ambiente conteinerizado, você precisará de:

- **Docker**
- **Visual Studio Code**
- **Git**

Os [Dev Containers](https://code.visualstudio.com/docs/devcontainers/containers) permitem definir um ambiente de desenvolvimento dentro de um container, com as ferramentas, extensões e configurações necessárias para o projeto.

**Principais vantagens:**

- 📦 **Ambiente padronizado:** reduz diferenças de configuração entre desenvolvedores.
- ⚙️ **Configuração automatizada:** ferramentas e extensões podem ser instaladas automaticamente.
- 🛡️ **Isolamento:** evita a necessidade de instalar todas as ferramentas diretamente no sistema operacional.

> 💡 **Não tem Docker?** Sem problemas! Você também pode executar os exemplos utilizando uma instalação local do Node.js.

### 💻 Ambiente alternativo — Instalação local

Para executar os exemplos sem Dev Containers, você precisará de:

- **Node.js 22**
- **Visual Studio Code**

O Git é opcional: se não estiver instalado, você poderá baixar o código-fonte diretamente pelo GitHub. Também é possível acompanhar os exemplos utilizando os arquivos disponibilizados em cada capítulo.

### 🧩 Extensões recomendadas para o VS Code

**Esta seção é destinada somente a quem optar pela instalação local.** Instale as extensões recomendadas no Visual Studio Code conforme sua preferência. A instalação é opcional e não interfere na execução dos exemplos.

| Extensão | Finalidade |
|---|---|
| 🎨 [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme) | Melhora a identificação visual de arquivos e diretórios. |
| 🔎 [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) | Identifica problemas e aplica regras de qualidade ao código JavaScript e TypeScript. |
| 💬 [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments) | Facilita a identificação visual de comentários no código. |
| 🌿 [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) | Facilita a consulta ao histórico e à autoria de alterações no Git. |
| 🤖 [Tabnine](https://www.tabnine.com/) | Oferece assistência de código com recursos de IA. |

Essas extensões são recomendações para melhorar a experiência de desenvolvimento, não requisitos obrigatórios para executar os exemplos.

---

## 🚀 Preparando o Ambiente - Obtendo o Código-Fonte

Os exemplos deste repositório podem ser acessados tanto através do Git quanto por meio do download manual disponibilizado pelo GitHub. Escolha a opção que melhor se adapta ao seu ambiente de desenvolvimento.

### Sem Git

Caso o Git não esteja instalado em sua máquina, os exemplos deste repositório também podem ser obtidos através do download manual disponibilizado pelo GitHub.

Para isso, clique no botão verde **Code** e depois clique na opção **Download ZIP** (veja a parte inferior da imagem abaixo).

![Download do Repositório](https://raw.githubusercontent.com/AntonioJavaDeveloper/assets/refs/heads/main/mastering-typescript/main/download-button.png)

Após o download, descompacte o arquivo em um diretório de sua preferência e abra a pasta do projeto utilizando o Visual Studio Code.

A partir desse ponto, será possível acompanhar todos os exemplos apresentados na documentação sem a necessidade de instalar ou utilizar o Git.

Caso esteja utilizando algum tipo de terminal e deseje abrir o projeto no Visual Studio Code, entre no diretório recém descompactado e depois digite o comando abaixo:

```bash
code .
```

### Com Git

Clone o projeto utilizando o comando:

```bash
git clone https://github.com/AntonioJavaDeveloper/mastering-typescript.git
```

Acesse o diretório criado:

```bash
cd mastering-typescript
```

Abra o projeto no Visual Studio Code:

```bash
code .
```

---

## 🐳 Ambiente de Desenvolvimento com Dev Containers - somente para quem for utilizar o Dev Containers

> Esta seção é destinada apenas para quem deseja utilizar o ambiente de desenvolvimento baseado em Dev Containers.

Após abrir o projeto no Visual Studio Code, uma notificação semelhante à imagem abaixo será exibida:

![Reopen in Container](https://raw.githubusercontent.com/AntonioJavaDeveloper/assets/refs/heads/main/mastering-typescript/main/reopen-in-container-button.png)

Clique no botão azul **Reopen in Container** e aguarde a criação do ambiente de desenvolvimento.

O principal objetivo do Dev Containers é padronizar o ambiente utilizado pelos desenvolvedores. Em projetos colaborativos é comum que cada integrante da equipe possua extensões, ferramentas e configurações diferentes instaladas localmente. Com o Dev Containers, essas dependências passam a ser definidas pelo próprio projeto, reduzindo diferenças entre ambientes de desenvolvimento.

Nada impede que outros containers sejam utilizados juntamente com este ambiente durante o desenvolvimento, como *bancos de dados*, *filas de mensagens* ou *aplicações auxiliares*. Da mesma forma, o ambiente utilizado em produção poderá possuir uma configuração diferente daquela utilizada durante o desenvolvimento local, dependendo das necessidades da aplicação.

---

## 📦 Instalação das Dependências

O [Node.js](https://nodejs.org/) utiliza o NPM (*Node Package Manager*) para gerenciar as dependências de um projeto, como bibliotecas, pacotes e ferramentas necessárias ao desenvolvimento.

Neste repositório, utilizamos duas dependências de desenvolvimento:

- **TypeScript:** adiciona tipagem estática ao JavaScript e permite verificar tipos e transpilar o código.
- **ts-node:** permite executar arquivos TypeScript diretamente pelo Node.js, sem precisar gerar manualmente os arquivos JavaScript antes de cada execução.

### ⚙️ Configurando o ambiente

Após clonar o repositório, acesse o diretório do projeto e execute:

```bash
npm install
```

O NPM instalará as dependências definidas na configuração do projeto, preparando o ambiente para acompanhar os exemplos deste repositório.

**Observação:** o projeto já possui as dependências configuradas. Não é necessário instalá-las individualmente.

---

## 🗂️ Organização dos Capítulos

Este repositório está estruturado em **capítulos temáticos**, cada um abordando um aspecto específico do ecossistema TypeScript. Os conteúdos evoluem gradualmente desde a configuração inicial do ambiente até recursos mais avançados da linguagem, permitindo que cada assunto seja explorado de forma independente.

Para manter o conteúdo organizado e facilitar a evolução da documentação, **cada capítulo está localizado em uma branch separada**.

### 📌 Estrutura por Branches

- A branch `main` funciona como índice central do projeto. Ela contém o `README.pt-BR.md` e o `README.md` com a visão geral do repositório, requisitos, configuração do ambiente e navegação entre os capítulos.
- Cada capítulo possui sua própria branch, identificada por um prefixo numérico seguido de um nome em inglês que representa o tema abordado.
- Dependendo da complexidade do assunto, uma branch pode conter múltiplos arquivos `README.md` para organizar o conteúdo em seções menores.
- Toda a documentação é disponibilizada em **português (`README.pt-BR.md`)** e **inglês (`README.md`)**.

### 🧭 Navegação entre Capítulos

Ao final do `README.pt-BR.md` da branch `main`, você encontrará a seção **📚 Catálogo de Capítulos**, contendo a relação de todos os temas abordados ao longo do repositório.

Cada capítulo possui uma branch dedicada, permitindo consultar assuntos específicos sem interferir nos demais conteúdos.

Exemplo de estrutura de navegação:

| Capítulo                                              | Link para o conteúdo em português                                                                                                                                                                                      |
|-------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 01 - Primeira Execução de uma Aplicação TypeScript    | [📘 `01-first-typescript-execution`](https://github.com/AntonioJavaDeveloper/mastering-typescript/blob/01-first-typescript-execution/README.pt-BR.md)                                                               |
| 02 - Ambiente TypeScript e Gerenciamento de Dependências | [📘 `02-typescript-environment-and-dependencies`](https://github.com/AntonioJavaDeveloper/mastering-typescript/blob/02-typescript-environment-and-dependencies/README.pt-BR.md)                                     |

---

## 📬 Contribuições

Se este projeto te ajudou ou inspirou, considere deixar uma estrela ⭐ no repositório!

Sinta-se à vontade para abrir *issues* com sugestões, correções ou dúvidas. Este repositório é um espaço voltado à **evolução constante** e à consolidação de boas práticas no desenvolvimento com TypeScript.


Toda colaboração construtiva será analisada com atenção.

---

## 🔗 Navegação Rápida

➡️ [Avançar para `01 - Primeira Execução de uma Aplicação TypeScript`](https://github.com/AntonioJavaDeveloper/mastering-typescript/blob/01-first-typescript-execution/README.pt-BR.md)

---

## 📫 Contato

Caso queira trocar experiências sobre desenvolvimento de software, arquitetura de aplicações, Java, TypeScript ou tecnologia em geral, você pode me encontrar através dos canais abaixo:

- 🌐 [https://javadeveloper.com.br/](https://javadeveloper.com.br/)
- 💼 [LinkedIn](https://www.linkedin.com/in/antonio-javadeveloper/)
- 📧 antonio@javadeveloper.com.br

> Developed by [AntonioJavaDeveloper](https://github.com/AntonioJavaDeveloper)