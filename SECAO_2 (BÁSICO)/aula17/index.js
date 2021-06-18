// FUNÇÕES (Básico)

// Declaração clássica de função
function soma(x = 1, y = 1) {
    const resultado = x + y;
    return resultado;
}

const resultado = soma(4);
console.log(resultado);

// Outra forma de declarar uma função (funcao anônima) (precisa do ; após o fechamento de chaves)
const raiz = function (n) {
    return n ** 0.5;
};

// ARROW FUNCTION
const raiz = (n) => {
    return n ** 0.5;
};

// ARROW FUNCTION SIMPLIFICADA (quando o código é pequeno)
const raiz = (n) => n ** 0.5;

console.log(raiz(349));
