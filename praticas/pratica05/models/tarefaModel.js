// d) array inicial vazio
const tarefas = [];

// e) listar
function listar() {
  return tarefas;
}

// i) buscar pelo id
function buscarPeloId(tarefaId) {
  return tarefas.find(t => t.id === tarefaId) || null;
}

// l) criar
function criar(tarefa) {
  const novaTarefa = {
    id: Math.random().toString(36).substr(2, 4), // gera id aleatório
    ...tarefa
  };
  tarefas.push(novaTarefa);
  return novaTarefa;
}

// p) atualizar
function atualizar(tarefa) {
  const index = tarefas.findIndex(t => t.id === tarefa.id);
  if (index === -1) {
    return null;
  }
  tarefas[index] = { ...tarefas[index], ...tarefa };
  return tarefas[index];
}

// t) remover
function remover(tarefaId) {
  const index = tarefas.findIndex(t => t.id === tarefaId);
  if (index === -1) {
    return null;
  }
  const removida = tarefas.splice(index, 1)[0];
  return removida;
}

// f, j, m, q, u) exportar
module.exports = {
  listar,
  buscarPeloId,
  criar,
  atualizar,
  remover
};
