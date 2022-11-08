const tasksService = require('../Services/tasks.service')


const getAllTasks = async (req, res) => {

  try {
    const result = await tasksService.getAll();
    res.status(200).json(result);
  } catch (error) {
    console.log(error)
  }
}

const getById = async (req, res) => {

  try {
    const { id } = req.params;
    const result = await tasksService.getOneId(id);
    res.status(200).json(result);
  } catch (error) {
    console.log(error)
  }
}

const deleteTasks = async (req, res) => {

  try {
    const {id} =  req.params;
    const result  = await tasksService.delete(id);
    res.status(204).json(result);
  } catch (error) {
    console.log(error);
  }
}

const postTasks = async (req, res) => {

  const {user_Id,title,description} = req.body;
  try {
    const result =  await tasksService.postNewTasks(user_Id,title, description);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
}

const update = async (req, res) => {

  try {
    const {id}= req.params;
    const {title,description, is_complete} = req.body;
    const result =  await tasksService.updateTasks(id,title, description,is_complete);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
}





module.exports = {
  getAllTasks,
  getById,
  deleteTasks,
  postTasks,
  update,
}