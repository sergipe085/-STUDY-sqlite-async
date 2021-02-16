const Database = require('./db');

async function saveTeste(teste) {
  const db = await Database;

  return db.run(`
    INSERT INTO testes (
      teste
    ) VALUES (
      "${teste.value}"
    )
  `)
}

module.exports = saveTeste;