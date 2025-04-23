const servicos = require('../dados.json');

exports.buscarPorTipoEBairro = (req, res) => {
  const tipo = req.params.tipo.toLowerCase();
  const bairro = req.params.bairro.toLowerCase();

  console.log(`Tipo: ${tipo}, Bairro: ${bairro}`);

  const resultados = servicos.filter(servico =>
    servico.tipo.toLowerCase() === tipo &&
    servico.bairro.toLowerCase() === bairro
  );

  if (resultados.length > 0) {
    res.json(resultados);
  } else {
    res.status(404).json({
      mensagem: `Nenhum serviço do tipo ${tipo} encontrado no bairro ${bairro}.`
    });
  }
};


