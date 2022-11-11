//controlador para obtener a todos los usuarios
const UserService = require("../Services/users.service");

const getAllUsers = async (req, res) => {
  try {
    const result = await UserService.getAll();
    res.status(200).json(result);
  } catch (error) {
    next({ status: 418, errorContent: error })
  }
}

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserService.getById(id);
    res.status(200).json(result);

  } catch (error) {
    next({ status: 418, errorContent: error })
  }
}

const getUserWithAddres = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserService.getUserJoinAddress(id);
    res.status(200).json(result);

  } catch (error) {
    next({ status: 418, errorContent: error })

  }
}

const getUserWithTasks = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserService.getUserJoinTasks(id);
    res.status(200).json(result);

  } catch (error) {
    next({ status: 418, errorContent: error })

  }
}

const createUser = async (req, res, next) => {
  try {
    const newUser = req.body;
    const result = await UserService.add(newUser);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 418,
      errorContent: error,
      message: "Revisa la información que mandas",
    });
  }
};
const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const dataUpdate = req.body;
    const result = await UserServices.update(dataUpdate, id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};



module.exports = {
  getAllUsers,
  getById,
  getUserWithAddres,
  getUserWithTasks,
  createUser,
  updateUser,
}
