require('dotenv').config();
const express = require('express');
const app = express();

const usuariosRouter = require('./routes/usuariosRouter');
const produtosRouter = require('./routes/produtosRouter');

// Middleware para interpretar JSON deve vir antes das rotas
app.use(express.json());

// Rotas
app.use('/api/usuarios', usuariosRouter);
app.use('/api/produtos', produtosRouter);

module.exports = app;
