const tarefaModel = require('../models/tarefaModel'); // a) importar tudo como tarefaModel

// b) listar → chama model.listar()
function listar(req, res) {
  const resultado = tarefaModel.listar();
  return res.json(resultado);
}

// g) buscarPeloId → chama model.buscarPeloId()
function buscarPeloId(req, res) {
  const { tarefaId } = req.params;
  const resultado = tarefaModel.buscarPeloId(tarefaId);

  // h) verifica se encontrou
  if (resultado) {
    return res.json(resultado);
  }
  return res.status(404).json({ msg: 'Tarefa não encontrada' });
}

// k) criar → chama model.criar()
function criar(req, res) {
  const tarefa = req.body;
  const resultado = tarefaModel.criar(tarefa);
  return res.status(201).json(resultado);
}

// n) atualizar → chama model.atualizar()
function atualizar(req, res) {
  const { tarefaId } = req.params;
  const tarefa = { id: tarefaId, ...req.body };
  const resultado = tarefaModel.atualizar(tarefa);

  // o) verifica se encontrou
  if (resultado) {
    return res.json(resultado);
  }
  return res.status(404).json({ msg: 'Tarefa não encontrada' });
}

// r) remover → chama model.remover()
function remover(req, res) {
  const { tarefaId } = req.params;
  const resultado = tarefaModel.remover(tarefaId);

  // s) verifica se encontrou
  if (resultado) {
    return res.status(204).send();
  }
  return res.status(404).json({ msg: 'Tarefa não encontrada' });
}

module.exports = {
  listar,
  buscarPeloId,
  criar,
  atualizar,
  remover
};
