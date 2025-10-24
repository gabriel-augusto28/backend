module.exports = {
    listar: (req, res) => res.status(200).json([]),
    buscar: (req, res) => res.status(200).json({ id: req.params.id }),
    criar: (req, res) => res.status(201).json(req.body),
    atualizar: (req, res) => res.status(200).json(req.body),
    remover: (req, res) => res.status(204).send()
  };
  