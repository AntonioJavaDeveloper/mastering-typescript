# Mastering TypeScript

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Stars](https://img.shields.io/github/stars/AntonioJavaDeveloper/mastering-typescript?style=social)](https://github.com/AntonioJavaDeveloper/mastering-typescript/stargazers)
[![Forks](https://img.shields.io/github/forks/AntonioJavaDeveloper/mastering-typescript?style=social)](https://github.com/AntonioJavaDeveloper/mastering-typescript/network/members)

---

## 📖 About This Repository

This repository provides a collection of fundamental concepts, features, and practices for developing applications with TypeScript. The chapters cover everything from the core elements of the language to advanced features related to static typing, object-oriented programming, generics, modules, decorators, and code organization in modern applications.

The examples are organized incrementally, helping readers understand how TypeScript features evolve and how they integrate with the JavaScript ecosystem. Each chapter focuses on a specific topic and demonstrates practical scenarios that encourage writing safer, more predictable, and maintainable code.

To make the examples easy to reproduce, the repository provides a standardized container-based development environment, allowing projects to run consistently regardless of the operating system being used.

The goal is to provide a comprehensive technical reference for developers who want to deepen their TypeScript knowledge, with a focus on best practices, readability, scalability, and software quality.

---

## ✅ Prerequisites

You can run the examples in this repository in two ways: **using Dev Containers (recommended)** or setting up the environment locally.

### 🐳 Recommended Environment — Dev Containers

To use the containerized environment, you will need:

- **Docker**
- **Visual Studio Code**
- **Git**

[Dev Containers](https://code.visualstudio.com/docs/devcontainers/containers) allow you to define a development environment inside a container, including the tools, extensions, and configurations required for the project.

**Key benefits:**

- 📦 **Standardized environment:** Reduces configuration differences between developers.
- ⚙️ **Automated setup:** Tools and extensions can be installed automatically.
- 🛡️ **Isolation:** Eliminates the need to install all development tools directly on your operating system.

> 💡 **Don't have Docker?** No problem! You can also run the examples using a local Node.js installation.

### 💻 Alternative Environment — Local Installation

To run the examples without Dev Containers, you will need:

- **Node.js 22**
- **Visual Studio Code**

Git is optional. If it is not installed, you can download the source code directly from GitHub. You can also follow the examples using the files provided in each chapter.

### 🧩 Recommended VS Code Extensions

**This section is intended only for those who choose the local installation option.** Install the recommended extensions in Visual Studio Code according to your preferences. Installation is optional and does not affect the execution of the examples.

| Extension | Purpose |
|---|---|
| 🎨 [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme) | Improves the visual identification of files and directories. |
| 🔎 [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) | Identifies issues and enforces code quality rules for JavaScript and TypeScript. |
| 💬 [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments) | Makes code comments easier to identify visually. |
| 🌿 [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) | Makes it easier to explore Git history and identify who made changes. |
| 🤖 [Tabnine](https://www.tabnine.com/) | Provides AI-powered coding assistance. |

These extensions are recommendations for improving the development experience, not mandatory requirements for running the examples.

---

## 🚀 Setting Up the Environment — Getting the Source Code

The examples in this repository can be accessed either through Git or by manually downloading the source code from GitHub. Choose the option that best suits your development environment.

### Without Git

If Git is not installed on your machine, you can also obtain the examples in this repository by manually downloading the source code from GitHub.

The download will include all files from the current chapter in a compressed archive that you can simply extract. Therefore, it is important to identify which chapter you are viewing before downloading the project.

At the top of the page, locate the repository name link, as illustrated in the image below. The repository name is `mastering-typescript`, highlighted in blue. Do not click this link just yet. However, you should know that clicking the `mastering-typescript` repository name link will redirect you to the chapter's main page.

![Breadcrumb English](https://raw.githubusercontent.com/AntonioJavaDeveloper/assets/refs/heads/main/mastering-typescript/main/breadcrumb-en-GB.png)

Once you return to the main page, you will see a list of files. Simply click the `README.md` file to return to this documentation.

As an exercise, click the `mastering-typescript` link to return to the chapter's main page. When the file listing appears, select `README.md` to return to this guide.

In the example above, the user is viewing the `README.md` file. You can also view and switch chapters using GitHub's branch selector. Each chapter is organized in a separate branch.

![List of Branches](https://raw.githubusercontent.com/AntonioJavaDeveloper/assets/refs/heads/main/mastering-typescript/main/list-of-branches-chapters.png)

Each branch represents a single chapter.

The `main` branch is the primary branch of this repository and corresponds to the first chapter in the documentation. This is our first chapter. As shown in the image, the `main` branch is highlighted, which means you are currently on the `main` branch. To switch branches, or chapters, simply browse the available options.

Your goal is to reach the main page of the `main` branch. You already know how to get there: simply click the blue `mastering-typescript` link. On the main page, look for the green **Code** button. Clicking this button will open a menu with several options. Simply click **Download ZIP** to download the chapter's files.

![Download the Repository](https://raw.githubusercontent.com/AntonioJavaDeveloper/assets/refs/heads/main/mastering-typescript/main/download-button.png)

After downloading, extract the archive into a directory of your choice. Navigate to the extracted directory and open the project folder in Visual Studio Code.

From this point on, you can follow all the examples presented in this guide without needing to install or use Git. Each chapter has its own branch. **Therefore, you will need to download the files again whenever you want to follow another chapter without using Git.** Remember that each chapter corresponds to a different branch. Select the desired chapter using the branch selector.

If you are using a terminal and want to open the project in Visual Studio Code, navigate to the newly extracted directory and run the following command:

```bash
code .
```

### With Git

Clone the repository using the following command:

```bash
git clone https://github.com/AntonioJavaDeveloper/mastering-typescript.git
```

Navigate to the newly created directory:

```bash
cd mastering-typescript
```

Open the project in Visual Studio Code:

```bash
code .
```

---

## 🐳 Development Environment with Dev Containers — For Dev Containers Users Only

> This section is intended only for those who want to use the development environment based on Dev Containers.

After opening the project in Visual Studio Code, a notification similar to the one shown below will appear:

![Reopen in Container](https://raw.githubusercontent.com/AntonioJavaDeveloper/assets/refs/heads/main/mastering-typescript/main/reopen-in-container-button.png)

Click the blue **Reopen in Container** button and wait for the development environment to be created.

The main goal of Dev Containers is to standardize the development environment used by developers. In collaborative projects, each team member often has different extensions, tools, and configurations installed locally. With Dev Containers, these dependencies are defined by the project itself, reducing differences between development environments.

You can still use other containers alongside this environment during development, such as *databases*, *message queues*, or *supporting applications*. Similarly, the environment used in production may have a different configuration from the one used during local development, depending on the application's requirements.

---

## 📦 Installing Dependencies

[Node.js](https://nodejs.org/) uses NPM (*Node Package Manager*) to manage project dependencies, such as libraries, packages, and tools required for development.

This repository uses two development dependencies:

- **TypeScript:** Adds static typing to JavaScript and allows you to perform type checking and transpile the code.
- **ts-node:** Allows you to execute TypeScript files directly with Node.js without manually generating JavaScript files before each execution.

### ⚙️ Setting Up the Environment

After cloning the repository, navigate to the project directory and run:

```bash
npm install
```

NPM will install the dependencies defined in the project configuration, preparing the environment for you to follow the examples in this repository.

**Note:** The project already has its dependencies configured. There is no need to install them individually.

---

## 🗂️ Chapter Organization

This repository is organized into **thematic chapters**, each covering a specific aspect of the TypeScript ecosystem. The content progresses gradually from the initial environment setup to more advanced language features, allowing each topic to be explored independently.

To keep the content organized and make the documentation easier to maintain and expand, **each chapter is located on a separate branch**.

### 📌 Branch Structure

- The `main` branch serves as the project's central index. It contains `README.pt-BR.md` and `README.md`, providing an overview of the repository, prerequisites, environment setup, and navigation between chapters.
- Each chapter has its own branch, identified by a numerical prefix followed by an English name representing the topic covered.
- Depending on the complexity of the subject, a branch may contain multiple `README.md` files to organize the content into smaller sections.
- All documentation is available in **Portuguese (`README.pt-BR.md`)** and **English (`README.md`)**.

### 🧭 Navigating Between Chapters

At the end of the `README.md` file on the `main` branch, you will find the **📚 Chapter Catalog** section, which lists all the topics covered throughout the repository.

Each chapter has a dedicated branch, allowing you to explore specific topics without affecting other content.

Example navigation structure:

| Chapter | Link to English Content |
|---|---|
| 01 - First TypeScript Application Execution | [📘 `01-first-typescript-execution`](https://github.com/AntonioJavaDeveloper/mastering-typescript/blob/01-first-typescript-execution/docs/01-first-typescript-execution/README.md) |
| 02 - TypeScript Environment and Dependency Management | [📘 `02-typescript-environment-and-dependencies`](https://github.com/AntonioJavaDeveloper/mastering-typescript/blob/02-typescript-environment-and-dependencies/docs/02-typescript-environment-and-dependencies/README.md) |

---

## 📬 Contributions

If this project has helped or inspired you, consider giving the repository a star ⭐!

Feel free to open *issues* with suggestions, corrections, or questions. This repository is a space dedicated to **continuous improvement** and the consolidation of best practices in TypeScript development.

All constructive contributions will be carefully reviewed.

---

## 🔗 Quick Navigation

➡️ [Continue to `01 - First TypeScript Application Execution`](https://github.com/AntonioJavaDeveloper/mastering-typescript/blob/01-first-typescript-execution/docs/01-first-typescript-execution/README.md)

---

## 📫 Contact

If you would like to exchange ideas about software development, application architecture, Java, TypeScript, or technology in general, you can reach me through the following channels:

- 🌐 [javadeveloper.com.br](https://javadeveloper.com.br/)
- 💼 [LinkedIn](https://www.linkedin.com/in/antonio-javadeveloper/)
- 📧 antonio@javadeveloper.com.br

> Developed by [AntonioJavaDeveloper](https://github.com/AntonioJavaDeveloper)