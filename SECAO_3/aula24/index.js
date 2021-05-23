//    40. if, else if e else (1)


const hora = 50;

if (hora >= 0 && hora <= 11) {
  console.log("Bom dia!");
} else if (11 < hora && hora <= 17) {
  console.log("Boa tarde!");
} else if (17 < hora && hora <= 23) {
  console.log("Boa noite!");
} else {
  console.log("Olá");
}
