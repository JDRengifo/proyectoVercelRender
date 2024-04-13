const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
 const { getCreateBdCountry } = require("./src/controllers/getCreateBdCountry.js");

const PORT = process.env.PORT ;
  // conn.sync({ force: true}).then(() => {  //? uso Restringido
  conn.sync({ alter: true }).then(() => { 
server.listen(PORT, () => {
  //  getCreateBdCountry() //! FALTA ARREGLAR ESTO
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
