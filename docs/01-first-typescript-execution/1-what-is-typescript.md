# 01 - What Is TypeScript?

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](../LICENSE)
[![Stars](https://img.shields.io/github/stars/AntonioJavaDeveloper/mastering-typescript?style=social)](https://github.com/AntonioJavaDeveloper/mastering-typescript/stargazers)
[![Forks](https://img.shields.io/github/forks/AntonioJavaDeveloper/mastering-typescript?style=social)](https://github.com/AntonioJavaDeveloper/mastering-typescript/network/members)

---

## 🧭 Navigation

📂 [`Repository Main README`](https://github.com/AntonioJavaDeveloper/mastering-typescript/blob/main/README.md)  
└── 📁 [`Chapter Introduction`](./README.md)  
&emsp;&emsp;├── [`01 - What Is TypeScript?`](./1-what-is-typescript.md) ← **You are here**  
&emsp;&emsp;└── [`02 - First Execution of a TypeScript Application`](./2-first-typescript-execution.md)

---

## 📖 Introduction

<figure>
  <img src="https://raw.githubusercontent.com/AntonioJavaDeveloper/assets/refs/heads/main/mastering-typescript/01-first-typescript-execution/typescript-logo.png" alt="TypeScript logo" width="180">
</figure>

TypeScript is a language that extends JavaScript with static typing features, making it possible to identify certain code inconsistencies before execution. Its use helps build applications that are more predictable, organized, and easier to maintain.

To understand how a TypeScript application works, it is necessary to understand its relationship with JavaScript and how code written in TypeScript is transformed so it can run in conventional environments.

This document introduces the fundamental concepts of TypeScript, explains the transpilation process, and introduces the role of the runtime environment used when developing applications.

The goal is to establish a conceptual foundation for following the practical examples in this chapter, without going into the installation or management of development tools at this stage.

---

## 🎯 What You Will Learn

This document explores three fundamental concepts:

- 🧩 **TypeScript and JavaScript:** the relationship between the two languages and the purpose of static typing.
- ⚙️ **Transpilation:** how TypeScript code is transformed into JavaScript.
- 🖥️ **Runtime environment:** how browsers and Node.js execute JavaScript.

---

## 📘 What Is TypeScript?

TypeScript is a programming language developed by Microsoft and based on JavaScript. Its main feature is the addition of a type system that allows developers to declare and check the data types used in code.

The language remains compatible with the JavaScript ecosystem and provides features that help with the organization and static analysis of applications.

### 🔗 Relationship Between TypeScript and JavaScript

TypeScript was designed to extend JavaScript while preserving its integration with the libraries, frameworks, and tools in that ecosystem.

While JavaScript allows applications to be developed without explicitly declaring variable types, TypeScript makes it possible to specify those types and check whether certain operations are compatible with the declarations.

Consider the following JavaScript example:

```javascript
function somar(a, b) {
    return a + b;
}

console.log(somar(10, 20));
```

The function receives two parameters and returns the result of the operation. However, the parameters do not have explicitly declared types.

The same function can be written in TypeScript:

```typescript
function somar(a: number, b: number): number {
    return a + b;
}

console.log(somar(10, 20));
```

In this example, the `number` type indicates that parameters `a` and `b`, as well as the value returned by the function, must be numbers.

Type declarations allow TypeScript tools to identify incompatibilities during code analysis, before execution.

> 💡 **Key point:** TypeScript extends JavaScript with features such as static typing. In the conventional workflow, TypeScript code is transformed into JavaScript, which can then be executed in compatible environments such as browsers and Node.js.

### 🧩 Static Typing as a Language Feature

Static typing makes it possible to check the compatibility between declared types and the operations performed in the code during static analysis.

For example:

```typescript
let idade: number = 30;

idade = 35;

// Assigning a value incompatible with the declared type causes an error.
idade = "trinta";
```

The `idade` variable was declared with the `number` type. For this reason, assigning a string is identified by the TypeScript type system as incompatible.

This type of check helps identify errors before execution, making maintenance easier and reducing certain types of inconsistencies.

However, static typing does not guarantee that an application is free of errors. Logic problems, runtime failures, and unexpected external data still need to be handled appropriately.

> **Important:** TypeScript type declarations are removed when the code is transformed into JavaScript. Therefore, static typing does not, by itself, provide automatic data validation at runtime. We will explore this topic in more detail later in this chapter and especially in the next one.

---

## ⚙️ How Is TypeScript Executed?

TypeScript code uses features that are not necessarily part of the JavaScript syntax recognized by runtime environments. For this reason, the conventional development workflow includes a code transformation step.

This step converts TypeScript code into JavaScript, which can then be executed in environments compatible with the target language.

### 🔄 What Is Transpilation?

Transpilation is the process of transforming source code from one language or language version into source code in another related language or version.

In the context of TypeScript, transpilation converts `.ts` files into JavaScript files, usually with the `.js` extension.

During this process, type declarations are removed, and language features are transformed according to the compilation options configured for the project.

The result is JavaScript code that can be interpreted or executed by the target environment, provided that it supports the features used.

### 📝 Transforming TypeScript Code into JavaScript

Consider the following TypeScript file:

```typescript
const mensagem: string = "Olá, TypeScript!";

console.log(mensagem);
```

The file contains a variable declaration with the explicit `string` type.

After transformation, the resulting JavaScript may look like this:

```javascript
const mensagem = "Olá, TypeScript!";

console.log(mensagem);
```

Notice that the `: string` declaration does not appear in the generated JavaScript code. The type information was used during TypeScript analysis, but it is not preserved as a type declaration in the conventional transpilation output.

The transformation can also adapt other language features according to the target configuration. For this reason, the exact output depends on the compilation options used.

> ✨ **Important note:** Type checking and transpilation are related but conceptually distinct steps. With the default configuration, type errors do not prevent JavaScript from being emitted. Therefore, even if TypeScript reports errors during static analysis, the code may still be transformed and executed. This reinforces the fact that type safety is provided during development, not automatically at runtime.
>
> In the next chapter, we will see how to configure TypeScript to prevent JavaScript files from being emitted when errors are detected during static code checking, such as type incompatibilities and improper access to private attributes or methods.

### 🔍 Difference Between Transpilation and Execution

Although they are related, transpilation and execution are distinct operations.

- **Transpilation:** transforms TypeScript code into JavaScript.
- **Execution:** processes JavaScript code in a compatible environment, carrying out the operations defined by the application.

The conventional workflow can be represented visually:

```text
┌─────────────────────────┐
│ TypeScript code (.ts)   │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│ Analysis and transpiling │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│ JavaScript code (.js)   │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│ Runtime environment     │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│ Application output      │
└─────────────────────────┘
```

Transpilation prepares the code for the target environment, while execution carries out the application's instructions.

It is important to note that some tools can combine these steps from the developer's perspective, allowing TypeScript files to be run directly through a command. This does not necessarily mean that the runtime environment natively interprets all TypeScript type declarations.

---

## 🖥️ The Role of the Runtime Environment

The runtime environment is responsible for processing JavaScript code and providing the resources needed for an application to work.

Some of the best-known runtime environments are web browsers and Node.js. Both can execute JavaScript, but they provide different resources and APIs according to their purposes.

### 🌐 Why Can Browsers and Node.js Execute JavaScript?

Modern browsers include engines capable of executing JavaScript. This enables interactive behavior on web pages, manipulation of interface elements, and operations made available through browser APIs.

Node.js, in turn, is a JavaScript runtime environment designed to execute code outside the browser. It uses the V8 engine, which is also used by Google Chrome, and provides APIs for operations such as file system access, network communication, and server-side application development.

Although both can execute JavaScript, browsers and Node.js do not provide exactly the same resources. Browser-specific APIs, such as `document`, are not automatically available in Node.js. Similarly, Node.js-specific resources, such as the `node:fs` module, are not part of conventional browser APIs.

We will explore this topic in more detail in the next chapter, including the relationship between Node.js, JavaScript, and ECMAScript.

### 🟢 Introduction to the Role of Node.js in This Project

In this repository, Node.js is used as the runtime environment for the TypeScript examples.

It allows the JavaScript files generated during the transformation process to be executed and provides resources required by the development tools used in the project.

Node.js is also part of the environment prepared for following the examples throughout the chapters. This makes it possible to study language concepts and observe program behavior in a consistent environment.

The detailed environment configuration, dependency installation, and role of the tools used to run TypeScript files will be covered in the next chapter.

---

## 📚 Further Reading

To explore the concepts presented in this document in more depth, refer to the official documentation:

- 📘 [TypeScript — Official Documentation](https://www.typescriptlang.org/docs/)
- 🧭 [TypeScript — What Is TypeScript?](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)
- 📖 [TypeScript — Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- 🟢 [Node.js — Official Documentation](https://nodejs.org/docs/latest/api/)
- 🌐 [MDN — JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

These resources provide additional explanations of the language, its type system, its relationship with JavaScript, and the environments used to run applications.

---

## 📬 Contributions

If this project has helped or inspired you, consider giving the repository a star ⭐!

Feel free to open *issues* with suggestions, corrections, or questions. This repository is dedicated to **continuous improvement** and the development of best practices for TypeScript development.

All constructive contributions will be carefully reviewed.

---

## 🔗 Quick Navigation

⬅️ Return to the [`Chapter introduction`](./README.md)

➡️ Continue to [`02 - First Execution of a TypeScript Application`](./2-first-typescript-execution.md)

⬅️ Return to the [`Repository Main README`](https://github.com/AntonioJavaDeveloper/mastering-typescript/blob/main/README.md)

---

## 📫 Contact

If you would like to exchange ideas about software development, application architecture, Java, TypeScript, or technology in general, you can reach me through the following channels:

- 🌐 [javadeveloper.com.br](https://javadeveloper.com.br/)
- 💼 [LinkedIn](https://www.linkedin.com/in/antonio-javadeveloper/)
- 📧 [antonio@javadeveloper.com.br](mailto:antonio@javadeveloper.com.br)

> Developed by [AntonioJavaDeveloper](https://github.com/AntonioJavaDeveloper)