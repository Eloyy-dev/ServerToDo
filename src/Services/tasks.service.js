const Tasks = require('../models/tasks.models');
const TaskCategories = require('../models/taskcategories.models');
const Categories = require('../models/categories.models');




class TasksService {
  static async getAll() {
    try {
      const result = await Tasks.findAll({
        attributes: ["id", "title", "description", "is_complete", "userId"],
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getOneId(userId) {
    try {
      const result = await Tasks.findAll({
        where: { userId },
        attributes: ["id", "title", "description", "is_complete"],
        include:{
          model: TaskCategories,
          as: 'categories',
          attributes:["categoryId"],
          include:{
            model: Categories,
            as: 'categories'
          }
        }
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

  static async postNewTasks(task, categorias) {
    try {
      const tasksResult = await Tasks.create(task);

      const { id } = tasksResult;
      categorias.forEach(async (categoria) => TaskCategories.create({ categoryId: categoria, taskId: id }));
     
      return tasksResult;
    } catch (error) {
      throw error;

    }
  }

  static async updateTasks(id, title, description, is_complete) {
    try {
      const result = await Tasks.update({
        isComplete: is_complete,
        title: title,
        description: description
      }, {
        where: {
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