//Backend Server
require('dotenv').config()

const server = require('./api/server.js')

const PORT = process.env.PORT || 3000;

if(process.env.DB_ENV === "production") {
  server.use(express.static('dist'));

  server.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "dist", "index.html"))
  })
}

server.listen(PORT, () => {
    console.log(`App is up and running. Listening on port ${PORT}`);
  });