const Categories = require('../models/categories.models');
const TaskCategories = require('../models/taskcategories.models');
const Tasks = require('../models/tasks.models');
const Users = require('../models/users.models');
const Address = require('../models/addresses.models');


class UserService {
  static async getAll() {
    try {
      const result = await Users.findAll({
        attributes: ["id", "username", "email"],
      }); //esto equivale a un select * from users
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getById(id) {
    try {
      const result = await Users.findByPk(id, {
        attributes: ["id", "username", "email"],
      })
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getUserJoinAddress(id) {
    try {

      const result = await Users.findOne({
        where: { id },
        attributes: ["id", "username"], //incluyo columnas
        include: {
          model: Address,
          as: "home",
          attributes: {
            exclude: ["id", "user_id", "userId"], //Excluyo columnas 
          }
        }

      })
      return result;

    } catch (error) {
      throw error;
    }
  }

  static async getUserJoinTasks(id) {
    try {
      const result = await Users.findOne({
        where: { id },
        attributes: ["username"],
        include: {
          model: Tasks,
          as: "todo",
          attributes: {
            exclude: ["title", "description", "is_complete"]
          },
          include: {
            model: TaskCategories,
            as: "categories",
            attributes: ["category_id"],
            include: {
              model: Categories,
              as: "categories",
              attributes: ["name"]
            }
          }
        }

      })

      return result;
    } catch (error) {
      throw error;
    }
  }



}


module.exports = UserService;