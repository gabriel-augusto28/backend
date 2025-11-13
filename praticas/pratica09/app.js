
const express = require('express');
const app = express();

const apidocsRouter = require('./routes/apidocsRouter');
const produtosRouter = require('./routes/produtosRouter');

app.use(express.json());

// Swagger UI docs
app.use('/api-docs', apidocsRouter);

// API routes
app.use('/produtos', produtosRouter);

// basic health
app.get('/', (req, res) => res.json({ status: 'OK', env: process.env.NODE_ENV || 'development' }));

module.exports = app;
