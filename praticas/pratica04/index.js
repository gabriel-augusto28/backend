const express = require('express');
const app = express();

const tarefas = [
  { id: 1, nome: "Estudar middleware", concluida: false },
  { id: 2, nome: "Praticar Express", concluida: true }
];

app.use(express.json());

app.use((req, res, next) => {
  const dataHora = new Date().toISOString();
  console.log(`[${dataHora}] ${req.method} ${req.url}`);
  next();
});

const tarefasRouter = express.Router();

tarefasRouter.get('/', (req, res) => {
  res.json(tarefas);
});

tarefasRouter.post('/', (req, res) => {
    const novaTarefa = {
      id: tarefas.length + 1,
      nome: req.body.nome,
      concluida: req.body.concluida || false
    };
    tarefas.push(novaTarefa);
    res.status(201).json(novaTarefa); 
  });
  

tarefasRouter.get('/:tarefaId', (req, res) => {
  const id = parseInt(req.params.tarefaId);
  const tarefa = tarefas.find(t => t.id === id);
  if (tarefa) {
    res.json(tarefa);
  } else {
    res.status(404).json({ erro: "Tarefa não encontrada" });
  }
});

tarefasRouter.put('/:tarefaId', (req, res) => {
  const id = parseInt(req.params.tarefaId);
  const tarefa = tarefas.find(t => t.id === id);
  if (tarefa) {
    tarefa.nome = req.body.nome ?? tarefa.nome;
    tarefa.concluida = req.body.concluida ?? tarefa.concluida;
    res.json(tarefa);
  } else {
    res.status(404).json({ erro: "Tarefa não encontrada" });
  }
});

tarefasRouter.delete('/:tarefaId', (req, res) => {
  const id = parseInt(req.params.tarefaId);
  const index = tarefas.findIndex(t => t.id === id);
  if (index !== -1) {
    tarefas.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ erro: "Tarefa não encontrada" });
  }
});

app.use('/tarefas', tarefasRouter);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});

module.exports = app;
