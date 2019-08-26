//express server
const express = require('express');
const cors = require('cors')
const helmet = require('helmet')
const server = express();
const path = require('path')

//Configures routes
const configRoutes = require('../config/routes.js')

//middleware
server.use(helmet())
server.use(cors())
server.use(express.json())

configRoutes(server)

server.get('/', (req, res) => {
  res.send('Hello, world!');
});

module.exports = server

