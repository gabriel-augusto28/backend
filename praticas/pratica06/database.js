const { MongoClient } = require('mongodb');

// Substitua pela sua connection string:
const url = "SUA_STRING_DE_CONEXAO";

const client = new MongoClient(url);

async function conectarDb() {
    await client.connect();
    return client.db('agenda');
}

module.exports = { conectarDb };
