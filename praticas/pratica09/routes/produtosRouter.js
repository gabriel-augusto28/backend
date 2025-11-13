
const express = require('express');
const router = express.Router();

const controller = require('../controllers/produtosController');

// GET /produtos
router.get('/', controller.listar);

// POST /produtos
router.post('/', controller.criar);

// GET /produtos/:produtoId
router.get('/:produtoId', controller.buscar);

// PUT /produtos/:produtoId
router.put('/:produtoId', controller.atualizar);

// DELETE /produtos/:produtoId
router.delete('/:produtoId', controller.remover);

module.exports = router;
