const express = require("express");
const initModels = require("./models/initModels");
// importamos la instancia db de database.js
const db = require("./utils/database");

//IMPORTO LAS RUTAS DEL USUARIO
const userRoutes = require('./Routes/users.routes');
const tasksRoutes = require('./Routes/tasks.routes');

require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 8000;
;

db.authenticate() // devuelve una promesa
  .then(() => console.log("Autenticación exitosa"))
  .catch((error) => console.log(error));

db.sync({ force: false }) // devuelve una promesa
  .then(() => console.log("Base sincronizada"))
  .catch((error) => console.log(error));

initModels();

app.get("/", (req, res) => {
  res.status(200).json("Todo bien");
});
app.use(express.json());
app.use('/api/v1', userRoutes);

app.use('/api/v1', tasksRoutes);






app.listen(PORT, () => console.log("Servidor corriendo"));
