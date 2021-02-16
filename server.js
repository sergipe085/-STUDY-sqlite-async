const axiosMiddleWare = require('./axios');
const express = require('express');

const server = express();
server.use(express.json());

server.get('/', axiosMiddleWare);

server.listen(3000);