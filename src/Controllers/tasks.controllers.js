const tasksService = require('../Services/tasks.service')


const getAllTasks = async (req, res, next) => {

  try {
    const result = await tasksService.getAll();
    res.status(200).json(result);
  } catch (error) {
    next({ status: 418, errorContent: error })
  }
}

const getById = async (req, res, next) => {

  try {
    const { id } = req.params;
    const result = await tasksService.getOneId(id);
    res.status(200).json(result);
  } catch (error) {
    next({ status: 418, errorContent: error })
  }
}

const deleteTasks = async (req, res, next) => {

  try {
    const { id } = req.params;
    const result = await tasksService.delete(id);
    res.status(204).json(result);
  } catch (error) {
    next({ status: 418, errorContent: error })
  }
}

const postTasks = async (req, res, next) => {
  try {
    const { task, categories } = req.body;
    const result = await tasksService.postNewTasks(task, categories);
    res.status(200).json({message: "la tarea se creo :)"});
  } catch (error) {
    next({ status: 418, errorContent: error })
  }
}

const update = async (req, res, next) => {

  try {
    const { id } = req.params;
    const { title, description, is_complete } = req.body;
    const result = await tasksService.updateTasks(id, title, description, is_complete);
    res.status(200).json(result);
  } catch (error) {
    next({ status: 418, errorContent: error })
  }
}





module.exports = {
  getAllTasks,
  getById,
  deleteTasks,
  postTasks,
  update,
}