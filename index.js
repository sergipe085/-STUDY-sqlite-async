const deleteTeste = require('./src/database/deleteTeste');
const saveTeste = require('./src/database/saveTeste');
const consultarTeste = require('./src/database/consultarTeste');

const axiosMiddleWare = require('./axios');

//deleteTeste(1);
//consultarTeste();

axiosMiddleWare().then(response => {
  console.log(response.coord);
  saveTeste({value: response.coord.lon})
})