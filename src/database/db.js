 // Criar banco de dados
// configurar mensagens/log no terminal
const sqlite3 = require('sqlite3').verbose()

// Criar o objeto que irá fazer operações
//   no banco de dados

// novo objeto
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db