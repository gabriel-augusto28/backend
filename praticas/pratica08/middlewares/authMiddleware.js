const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET = process.env.JWT_SECRET || 'chave_secreta_teste';

// Gera o token com base nos dados do usuário
function gerarToken(payload) {
  return jwt.sign(payload, SECRET, { expiresIn: '1h' });
}

// Verifica o token enviado no header Authorization
function verificarToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // formato: "Bearer <token>"

  if (!token) {
    return res.status(401).json({ msg: 'Token não fornecido' });
  }

  try {
    const usuario = jwt.verify(token, SECRET);
    req.usuario = usuario; // adiciona o usuário decodificado na requisição
    next();
  } catch (error) {
    console.error('Token inválido:', error.message);
    return res.status(403).json({ msg: 'Token inválido ou expirado' });
  }
}

module.exports = { gerarToken, verificarToken };
