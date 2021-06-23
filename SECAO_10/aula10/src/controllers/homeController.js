exports.paginaInicial = (req, res) => {
  res.render('index'); // renderizando nossa página index.ejs (naso precisa informar a extensão)
};

exports.trataPost = (req, res) => {
  res.send('Ei, sou sua nova rota de post');
};
