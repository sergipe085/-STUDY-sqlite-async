const axios = require('axios');

const getDataFromApi = async (req, res, next) => {
  return await axios.get('https://api.openweathermap.org/data/2.5/weather?id=3447651&appid=a0ac47dfcc15e39f2ce81b177a3db142').then(async response => {
    return await response.data;
  });
}

module.exports = getDataFromApi;