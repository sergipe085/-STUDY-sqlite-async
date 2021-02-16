const Database = require('./db');

module.exports = async function consultarTeste() {
  const db = await Database;

  const result = await db.all(`SELECT * FROM testes`);
  console.log(result);
}