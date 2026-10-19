class Pessoa {
    private primeiroNome: string = "";
    private ultimoNome: string = "";
    private _idade: number = 0;

    get nome(): string {
        return `${this.primeiroNome} ${this.ultimoNome}`;
    }

    set nome(nomeCompleto: string) {
        // Trim remove espaços nas pontas. O split(/\s+/) quebra o texto em cada espaço,
        // transformando a string em um array (lista) de palavras.
        const partesDoNome = nomeCompleto.trim().split(/\s+/);

        // Atribui a primeira parte ao primeiro nome.
        this.primeiroNome = partesDoNome[0] ?? "";

        // Pega apenas o último elemento se houver mais de uma palavra.
        // Se houver apenas 1 palavra, o último nome fica vazio.
        this.ultimoNome = partesDoNome.length > 1 ? partesDoNome[partesDoNome.length - 1] : "";
    }

    get idade(): number {
        return this._idade;
    }

    set idade(idade: number) {
        this._idade = idade;
    }
}

const cliente = new Pessoa();

cliente.nome = "José da Silva";
cliente.idade = 25;

// Erro: primeiroNome é privado e não pode ser acessado diretamente.
// console.log(`Meu primeiro nome é ${cliente.primeiroNome}`);

// Funciona: acessa a propriedade nome por meio do getter.
// console.log(`Meu nome completo é ${cliente.nome}`);
