const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/produtosController');

// Exemplo de rotas
router.get('/', produtosController.listar);
router.get('/:id', produtosController.buscar);
router.post('/', produtosController.criar);
router.put('/:id', produtosController.atualizar);
router.delete('/:id', produtosController.remover);

// tests/produtosRouter.test.js
const request = require('supertest');
const app = require('../app');

describe('Teste mínimo para a rota /produtos', () => {
  test('Rota GET /produtos deve retornar status 200', async () => {
    const res = await request(app).get('/produtos');
    expect(res.statusCode).toBe(200);
  });
});

module.exports = router;
