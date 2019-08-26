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

if(process.env.NODE_ENV === "production") {
  server.use(express.static('dist'));

  server.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "dist", "index.html"))
  })
}

configRoutes(server)

server.get('/', (req, res) => {
  res.send('Hello, world!');
});

module.exports = server

