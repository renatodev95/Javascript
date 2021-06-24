// Não podemos esquecer o NEXT dentro do middleware, senão a requisição NÃO TERMINA!!!

exports.middlewareGlobal = (req, res, next) => {
  res.locals.umaVariavelLocal = 'Este é o valor da variável local.';
  next();
};

exports.outroMiddleware = (req, res, next) => {
  next();
};
