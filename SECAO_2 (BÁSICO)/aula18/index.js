/* Trabalhando com OBJETOS
(ARGUMENTO É O VALOR QUE É PASSADO PARA O PARÂMETRO) 
(QUANDO UMA FUNÇÃO ESTÁ DENTRO DE UM OBJETO ELA É CHAMADA DE "MÉTODO") */

// Função que cria um objeto
function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
    };
}

// A mesma função de modo simplificado
function criaPessoa(nome, sobrenome, idade) {
    // aqui o javascript já entende que as chaves terão o mesmo valor dos parâmetros
    return { nome, sobrenome, idade };
}

// Crianto métodos dentro de objetos (aqui não precisa da palavra "function")
const pessoa1 = {
    nome: "Renato",
    sobrenome: "Pereira",
    idade: 25,

    fala() {
        // usando a palavra "THIS" para referenciar o objeto DENTRO DELE MESMO
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade() {
        // incrementando o valor da idade
        this.idade++;
    },
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
