const express = require('express');
const { gerarToken, verificarToken } = require('../middlewares/authMiddleware');
const router = express.Router();

// Login → gera o primeiro token
router.post('/login', (req, res) => {
  const { usuario, senha } = req.body;

  // Validação simples
  if (!usuario || !senha) {
    return res.status(400).json({ msg: 'Usuário e senha são obrigatórios' });
  }

  try {
    // Gera token com base no campo 'usuario'
    const token = gerarToken({ email: usuario });
    return res.status(200).json({ token });
  } catch (error) {
    console.error('Erro ao gerar token:', error);
    return res.status(500).json({ msg: 'Erro interno ao gerar token' });
  }
});

// Renovação do token
router.post('/renovar', verificarToken, (req, res) => {
  try {
    const token = gerarToken({ email: req.usuario.email });
    return res.status(200).json({ token });
  } catch (error) {
    console.error('Erro ao renovar token:', error);
    return res.status(500).json({ msg: 'Erro interno ao renovar token' });
  }
});

module.exports = router;
