// Não podemos esquecer o NEXT dentro do middleware, senão a requisição NÃO TERMINA!!!

exports.middlewareGlobal = (req, res, next) => {
  next();
};

exports.outroMiddleware = (req, res, next) => {
  next();
};
