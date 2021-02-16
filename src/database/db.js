const Database = require('sqlite-async')

module.exports = Database.open(__dirname + '/database.sqlite').then(db => {
  return db.exec(`
    CREATE TABLE IF NOT EXISTS testes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      teste TEST
    )
  `)
})