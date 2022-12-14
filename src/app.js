const express = require("express");
const initModels = require("./models/initModels");
// importamos la instancia db de database.js
const db = require("./utils/database");
const morgan =  require("morgan");
//IMPORTO LAS RUTAS DEL USUARIO
const userRoutes = require('./Routes/users.routes');
const tasksRoutes = require('./Routes/tasks.routes');
const authRoutes = require('./Routes/auth.routes');
require('dotenv').config();

const app = express();

const handleError = require('./middlewares/error');
// const Logs = require('./middlewares/requestLogs');

//app.use(Logs);//PUNTO DE MONTAJE DEBE LLEVAR ESPECIFICADO RUTA Y FUNC, SINO TIENE RUTA SE EJECUTA EN CUALQUIER PETICION
app.use(morgan('tiny'));
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

app.use('/api/v1', authRoutes);

app.use(handleError);


app.listen(PORT, () => console.log(`Servidor corriendo ${PORT}`));
