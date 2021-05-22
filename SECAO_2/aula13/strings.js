let umaString = "O rato roeu a roupa do rei de roma.";
console.log(umaString.indexOf("o", 3)); // de frente pra trás
console.log(umaString.lastIndexOf("m", 3)); // de trás pra frente
console.log(umaString.match(/[a-z]/g)); // usando expressão regular com match
console.log(umaString.search(/[a-z]/)); // usando expressão regular com search
console.log(umaString.replace(/r/g, "#")); // método replace com regexp
console.log(umaString.length); // obtendo o tamanho da string
console.log(umaString.slice(2, 6)); // fatiando a string
console.log(umaString.slice(-5, -1)); // fatiando a string de tras pra frente
console.log(umaString.split(" ")); // dividindo a string em partes (separador " ")
console.log(umaString.toUpperCase()); // convertendo para letras maiúsculas
console.log(umaString.toLocaleLowerCase()); // convertendo para letras minúsculas

for (let i = 0; i < 10; ++i) {
    console.log(i);
}
