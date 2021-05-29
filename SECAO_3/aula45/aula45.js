// Tratando e lançando erros (try, catch, finally)

try {
  // Executada quando não há erros
} catch (error) {
  // Executada quando há erros
} finally {
  // Pode ser omitido, mas se estiver presente será executado sempre (independente de erro).
}

try {
  console.log("Abri um arquivo");
  console.log("Manipulei o arquivo e gerou erro");
} catch (error) {
  // Executada quando há erros
  console.log("Tratando o erro.");
} finally {
  // Pode ser omitido, mas se estiver presente será executado sempre (independente de erro).
  console.log("Fechei o arquivo");
}

// ---------------------------------------------------------------------------------------------
                            //  EXEMPLO
                            
function retornaHora(data) {
  // Verificando se a data passada como argumento é instância da classe Date.
  if (data && !(data instanceof Date)) {
    throw new TypeError("Esperando instância de Date.");
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

try {
  const data = new Date("01-01-1970 12:58:12");
  const hora = retornaHora();
  console.log(hora);
} catch (error) {
  // Tratar erro
  // console.log(error);
} finally {
  console.log("Tenha um bom dia.");
}
