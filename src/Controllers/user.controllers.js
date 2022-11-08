//controlador para obtener a todos los usuarios
const UserService = require("../Services/users.service");

const getAllUsers = async (req, res) => {
  try {
    const result = await UserService.getAll();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
}

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserService.getById(id);
    res.status(200).json(result);

  } catch (error) {
    console.log(error)
  }
}

const getUserWithAddres = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserService.getUserJoinAddress(id);
    res.status(200).json(result);

  } catch (error) {
    console.log(error)

  }
}

const getUserWithTasks = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserService.getUserJoinTasks(id);
    res.status(200).json(result);

  } catch (error) {
    console.log(error)

  }
}






module.exports = {
  getAllUsers,
  getById,
  getUserWithAddres,
  getUserWithTasks,
}