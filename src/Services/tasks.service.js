const Tasks = require('../models/tasks.models');
const TaskCategories = require('../models/taskcategories.models');




class TasksService {
  static async getAll() {
    try {
      const result = await Tasks.findAll({
        attributes: ["id", "title", "description", "is_complete"],
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getOneId(id) {
    try {
      const result = await Tasks.findByPk(id, {
        attributes: ["id", "title", "description", "is_complete"],
      });
      return result;
    } catch (error) {
      throw error;
    }
  }


  static async delete(id) {
    try {
      const result = await Tasks.destroy({
        where: {
          id,
        }
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async postNewTasks(user_Id,title, description, is_complete) {
    try {
      const result = await Tasks.create({
        userId: user_Id,
        title: title,
        description: description
      });
      return result;
    } catch (error) {
      throw error;

    }
  }

  static async updateTasks(id,title, description, is_complete) {
    try {
      const result = await Tasks.update({
        isComplete: is_complete,
        title: title,
        description: description
      },{
        where:{
          id: id,
        }
      });
      return result;
    } catch (error) {
      throw error;

    }
  }
}


















module.exports = TasksService;