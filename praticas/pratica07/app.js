// Importações principais
require('dotenv').config(); // Carrega variáveis do arquivo .env
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan'); // opcional, para logs de requisições
const cors = require('cors'); // opcional, útil em APIs
const app = express();

// Middleware padrão
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

// Conexão com o MongoDB Atlas
mongoose.connect(
  `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
.then(() => console.log('✅ Conectado ao MongoDB Atlas com sucesso!'))
.catch((err) => console.error('❌ Erro ao conectar ao MongoDB:', err));

// Rota base (teste inicial)
app.get('/', (req, res) => {
  res.status(200).json({ mensagem: 'API prática07 está online 🚀' });
});

const produtosRouter = require('./routes/produtosRouter');
app.use('/produtos', produtosRouter);


module.exports = app;
