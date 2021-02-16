const Database = require('./db');

module.exports = async function deleteTeste(id) {
  const db = await Database;
  return db.run(`DELETE FROM testes WHERE id = '${id}'`);
}