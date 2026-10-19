# 02 — First Execution of a TypeScript Application

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](../LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/AntonioJavaDeveloper/mastering-typescript?style=social)](https://github.com/AntonioJavaDeveloper/mastering-typescript/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/AntonioJavaDeveloper/mastering-typescript?style=social)](https://github.com/AntonioJavaDeveloper/mastering-typescript/network/members)

---

## 🧭 Navigation

📂 [`Repository Main README`](https://github.com/AntonioJavaDeveloper/mastering-typescript/blob/main/README.md)  
└── 📁 [`Chapter Introduction`](./README.md)  
&emsp;&emsp;├── [`01 — What Is TypeScript?`](./1-what-is-typescript.md)  
&emsp;&emsp;└── [`02 — First Execution of a TypeScript Application`](./2-first-typescript-execution.md) ← **You are here**

---

## 📖 Introduction

You are already familiar with the fundamental concepts of TypeScript and understand its relationship with JavaScript. Now it is time to move beyond theory and see an application working in practice.

In this document, you will use a class named `Pessoa` to explore TypeScript code, run a program, and observe the results displayed in the terminal.

The example will also let you experiment with a situation in which the type system identifies an invalid access and compare it with a valid operation. This will help you begin to understand how TypeScript can identify certain problems before execution.

You do not need to have mastered object-oriented programming to complete this exercise. The goal is to learn the basic workflow and become familiar with the development environment.

### 🎯 Objectives

By the end of this activity, you should be able to:

- Locate and identify the TypeScript file used in the exercise.
- Run a TypeScript program in the environment prepared for the project.
- Observe the output produced in the terminal.
- Recognize the difference between permitted access and access that conflicts with a `private` declaration.
- Develop an introductory understanding of the relationship between TypeScript code and its execution.

---

## 💻 Getting to Know the Example

### 📂 File Used

This exercise uses the `Pessoa.ts` file, located in this chapter's source code directory:

```text
mastering-typescript/
├── docs/
│   ├── 1-what-is-typescript.md
│   └── 2-first-typescript-execution.md
└── src/
    └── 01-first-typescript-execution/
        └── Pessoa.ts
```

You can view the file directly in the repository:

📄 [`src/01-first-typescript-execution/Pessoa.ts`](../src/01-first-typescript-execution/Pessoa.ts)

### 🧩 What Does the Program Do?

The `Pessoa` class represents a person with a name and an age. It contains private properties, read and write accessors called *getters* and *setters*, and a short section that creates an object and assigns values to it.

Here are the main elements of the example:

| Element | Purpose |
|---|---|
| `class Pessoa` | Declares a class named `Pessoa`. |
| `private primeiroNome` | Stores the first name and restricts direct access to it from outside the class. |
| `private ultimoNome` | Stores the last name. |
| `private _idade` | Stores the age. |
| `get nome()` | Allows the full name to be retrieved. |
| `set nome(...)` | Receives the full name and separates the first and last words. |
| `get idade()` and `set idade(...)` | Allow the age to be retrieved and changed. |
| `new Pessoa()` | Creates an object from the class. |

Do not worry about memorizing these concepts yet. They are included to provide context for the example, and you will be able to study them in more depth as you progress.

### 🔎 An Interesting Detail About the Name

In the code, the assignment is:

```typescript
cliente.nome = "José da Silva";
```

However, the *setter* was implemented to store only the first and last words of the supplied name. As a result, the `nome` property will return `José Silva`, omitting the middle word `da`.

This makes the example interesting because it shows that the value of a property does not have to be exactly the text originally assigned to it: the code can process the information before storing it.

---

## ⚙️ Running the Application

### 1. Open the Project in the Development Environment

Open the `mastering-typescript` repository in VS Code, using the development environment configured for the project.

Make sure the terminal is open at the repository root, in the directory that contains the `package.json` file.

If you are using the Dev Container, open the integrated VS Code terminal inside that environment.

### 2. Prepare the Example to View the Output

Open the `src/01-first-typescript-execution/Pessoa.ts` file.

At the end of the file, you will find two commented-out lines of code using `console.log()`.

```typescript
// Erro: primeiroNome é privado e não pode ser acessado diretamente.
// console.log(`Meu primeiro nome é ${cliente.primeiroNome}`);

// Funciona: acessa a propriedade nome por meio do getter.
// console.log(`Meu nome completo é ${cliente.nome}`);
```

For now, remove the comments from only the second `console.log()` call.

```typescript
console.log(`Meu nome completo é ${cliente.nome}`);
```

Keep the first `console.log()` call commented out. You will use it in a later experiment.

### 3. Run the Program

To run a TypeScript file, we will use the `npx tsx` command. In this example, we will run `Pessoa.ts`, located at `src/01-first-typescript-execution/Pessoa.ts`. Run the following command, providing the file's full path:

```bash
npx tsx src/01-first-typescript-execution/Pessoa.ts
```

Alternatively, you can first navigate to the directory containing `Pessoa.ts`:

```bash
cd src/01-first-typescript-execution
```

Then run:

```bash
npx tsx Pessoa.ts
```

In both examples, the `npx tsx` command is used to run `Pessoa.ts`. The only difference is the directory from which the command is invoked, which determines whether you need to provide the full path or just the file name.

The command uses the `tsx` tool available in the project to run the TypeScript file without requiring you to manually generate a separate JavaScript file beforehand.

**The installation and detailed operation of these tools will be covered in the next chapter.**

### 4. Check the Output

If everything is working correctly, you will see:

```text
Meu nome completo é José Silva
```

Congratulations! You have run your first practical example in this chapter.

Notice that the program did not display `José da Silva`, even though that was the text assigned to the property. This happens because the *setter* keeps only the first and last words.

This is the expected result for the current implementation of the class.

---

## 🧪 Experiment: Permitted and Invalid Access

Now that you have successfully run the program, let's observe an important TypeScript behavior.

### 1. Access the Public Property

In the `Pessoa.ts` file, the following statement accesses the `nome` property:

```typescript
console.log(`Meu nome completo é ${cliente.nome}`);
```

This access is allowed because `nome` is exposed through a public *getter*.

### 2. Try to Access a Private Property

Now locate the following line:

```typescript
console.log(`Meu nome completo é ${cliente.nome}`);
```

Add two forward slashes (`//`) at the beginning of the line to comment it out:

```typescript
// console.log(`Meu nome completo é ${cliente.nome}`);
```

Next, locate this line:

```typescript
// console.log(`Meu primeiro nome é ${cliente.primeiroNome}`);
```

Remove the two forward slashes (`//`) at the beginning of the line:

```typescript
console.log(`Meu primeiro nome é ${cliente.primeiroNome}`);
```

Run the program again:

```bash
npx tsx src/01-first-typescript-execution/Pessoa.ts
```

Or, if you are already in the class directory:

```bash
npx tsx Pessoa.ts
```

You will see the following output in the terminal:

```text
Meu primeiro nome é José
```

Wait a moment! The `primeiroNome` property was declared with the `private` modifier. Why did the program work?

Visual Studio Code identifies an attempt to access the private property and flags the problem with a red underline in the code. During static type checking (the checks TypeScript performs before the program runs), the compiler identifies that we are trying to access a private property from outside the class in which it was declared.

![Visual Studio Code indicating invalid access to a private property](https://raw.githubusercontent.com/AntonioJavaDeveloper/assets/refs/heads/main/mastering-typescript/01-first-typescript-execution/tsc-script-message-error.png)

*Figure 1 — The error identified by Visual Studio Code when attempting to access the private property.*

Even though this error has been identified, the JavaScript code is still generated and the program runs, displaying its output in the terminal.

We already know that static checking and transpilation are distinct processes. Static checking analyzes the source code to identify potential problems without needing to run the program. Transpilation, on the other hand, converts TypeScript code into JavaScript, generating the code that will actually be executed by the runtime environment.

With the default TypeScript configuration, errors identified during static checking do not prevent transpilation. This means that even when the compiler reports invalid access to a private property, the JavaScript file is still generated.

![Terminal displaying the program's execution output](https://raw.githubusercontent.com/AntonioJavaDeveloper/assets/refs/heads/main/mastering-typescript/01-first-typescript-execution/terminal-command-output.png)

*Figure 2 — Program output, even though the editor has flagged the invalid access.*

**In the next chapter, we will take a closer look at how static type checking relates to transpilation and how to configure TypeScript to prevent JavaScript files from being generated when errors are detected during code analysis.**

**What have we learned?**

An invalid access attempt can be identified by the editor without necessarily preventing the program from running. In the following chapters, we will explore this topic further and learn how to control this behavior.

For now, restore the example: keep the direct access to `cliente.primeiroNome` commented out and leave the access through `cliente.nome` enabled.

### 3. Restore the Example

After the experiment, comment out the private-property access again and leave the getter access enabled:

```typescript
// console.log(`Meu primeiro nome é ${cliente.primeiroNome}`);

console.log(`Meu nome completo é ${cliente.nome}`);
```

Run the program again and confirm that the expected output appears without errors.

### 💡 What Have We Learned?

This experiment demonstrates that TypeScript can identify certain access-related problems during type checking.

This does not mean that every possible error will be detected before execution. Logic errors, unexpected data, and failures in external operations still need to be handled appropriately.

Also, TypeScript's `private` modifier should not be confused with a runtime security guarantee. In the conventional workflow, this restriction is checked by the type system; by itself, it is not equivalent to JavaScript's native private fields, such as `#primeiroNome`.

---

## ✅ Validating the Environment

After completing the exercises, use this checklist to confirm the results:

- [ ] The `Pessoa.ts` file was located in the correct directory.
- [ ] The `npx tsx` command was run in the terminal.
- [ ] The output `Meu nome completo é José Silva` was displayed.
- [ ] Direct access to the private property was identified as invalid.
- [ ] The example was restored to its working state.

### 🔧 Troubleshooting Basic Issues

If the program does not work as expected, check the following before continuing.

**Does the command report that the file could not be found?**

Make sure you are at the repository root and that you entered the file path correctly.

**Does the terminal report that `tsx` could not be found?**

Check whether the project's dependencies have been installed and whether the terminal is using the correct development environment. The installation and management of these tools will be explained in the next chapter.

**Does the program report a TypeScript error?**

Check whether the command that accesses `cliente.primeiroNome` is still commented out. If it is active, the error is expected in this exercise.

**Does the program finish without displaying a message?**

Check whether the `console.log` statement that accesses `cliente.nome` is enabled. In the original file, both output statements are commented out.

---

## 🔄 TypeScript and JavaScript During Execution

In this exercise, you ran a `.ts` file without having to manually create a `.js` file before starting the program.

This does not mean that TypeScript and JavaScript are the same language, nor that Node.js is another programming language.

TypeScript adds features such as static typing to JavaScript. Tools such as `tsx` allow the code to be transformed as part of the execution workflow, while Node.js provides the environment in which JavaScript runs.

In the traditional compilation workflow, you can also transform the TypeScript file into JavaScript beforehand and execute the result separately.

These different workflows will be explored in the next chapters as we study the TypeScript environment and its dependencies.

---

## 📚 Further Reading

To explore the concepts introduced here in more depth, consult the official documentation:

- 📘 [TypeScript — Official Documentation](https://www.typescriptlang.org/docs/)
- 📖 [TypeScript Handbook — Introduction](https://www.typescriptlang.org/docs/handbook/intro.html)
- 🧭 [TypeScript — From Scratch](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)
- 🟢 [Node.js — Official Documentation](https://nodejs.org/docs/latest/api/)
- 🌐 [JavaScript — MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 📬 Contributions

If this project has helped or inspired you, consider giving the repository a star ⭐!

Feel free to open *issues* with suggestions, corrections, or questions. This repository is dedicated to **continuous improvement** and the development of best practices for TypeScript development.

All constructive contributions will be carefully reviewed.

---

## 🔗 Quick Navigation

⬅️ Return to [`01 — What Is TypeScript?`](./1-what-is-typescript.md)

➡️ Continue to [`Chapter 02 — TypeScript Environment and Dependency Management`](https://github.com/AntonioJavaDeveloper/mastering-typescript/tree/02-typescript-environment-and-dependencies/docs/02-typescript-environment-and-dependencies/README.md)

🏠 Return to the [`Repository Main README`](https://github.com/AntonioJavaDeveloper/mastering-typescript/blob/main/README.md)

---

## 📫 Contact

If you would like to exchange ideas about software development, application architecture, Java, TypeScript, or technology in general, you can reach me through the following channels:

- 🌐 [javadeveloper.com.br](https://javadeveloper.com.br/)
- 💼 [LinkedIn](https://www.linkedin.com/in/antonio-javadeveloper/)
- 📧 [antonio@javadeveloper.com.br](mailto:antonio@javadeveloper.com.br)

> Developed by [AntonioJavaDeveloper](https://github.com/AntonioJavaDeveloper)