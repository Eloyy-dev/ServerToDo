const {Router} = require("express");
const { getAllUsers, getById, getUserWithAddres, getUserWithTasks } = require("../Controllers/user.controllers");

const router = Router();

//para obtener a tdos los usuarios --> get
router.get("/users", getAllUsers);

//obtener un user por id
// /users/:id
router.get("/users/:id", getById);

//obtener la direccion de un user especifico
router.get("/users/:id/address", getUserWithAddres);

//obtener la tarea/s de un user especifico
router.get("/users/:id/tasks", getUserWithTasks);










module.exports = router;

