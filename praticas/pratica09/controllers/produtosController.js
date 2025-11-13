
/**
 * Simples controller em memória para /produtos
 * Estrutura do produto: { id: string, nome: string, preco: number }
 */

let produtos = [
  { id: "1", nome: "Camiseta", preco: 49.90 },
  { id: "2", nome: "Caneca", preco: 19.50 }
];

const listar = (req, res) => {
  res.status(200).json(produtos);
};

const criar = (req, res) => {
  const { nome, preco } = req.body;
  if (!nome || preco === undefined) {
    return res.status(422).json({ message: 'Nome e preço são obrigatórios' });
  }
  const id = String(Date.now());
  const novo = { id, nome, preco };
  produtos.push(novo);
  res.status(201).json(novo);
};

const buscar = (req, res) => {
  const { produtoId } = req.params;
  const p = produtos.find(x => x.id === produtoId);
  if (!p) return res.status(404).json({ message: 'Produto não encontrado' });
  res.status(200).json(p);
};

const atualizar = (req, res) => {
  const { produtoId } = req.params;
  const { nome, preco } = req.body;
  const idx = produtos.findIndex(x => x.id === produtoId);
  if (idx === -1) return res.status(404).json({ message: 'Produto não encontrado' });
  if (!nome || preco === undefined) return res.status(422).json({ message: 'Nome e preço são obrigatórios' });
  produtos[idx] = { id: produtoId, nome, preco };
  res.status(200).json(produtos[idx]);
};

const remover = (req, res) => {
  const { produtoId } = req.params;
  const idx = produtos.findIndex(x => x.id === produtoId);
  if (idx === -1) return res.status(404).json({ message: 'Produto não encontrado' });
  produtos.splice(idx, 1);
  res.status(204).send();
};

module.exports = {
  listar,
  criar,
  buscar,
  atualizar,
  remover
};
