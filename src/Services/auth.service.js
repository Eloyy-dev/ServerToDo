const Users = require("../models/users.models");
const bcrypt = require("bcrypt");



class AuthService {
  static async login(email, password) {
    try {
      const result = await Users.findOne({
        where: { email }
      });
      if (result) {
        const isValid = bcrypt.compareSync(password, result.password);
        return {isValid, result};

      }
    } catch (error) {
      throw (error);
    }
  }
}


/*
  el servidor busca en la base de datos al usuario con email que mandamos
  para obetener la contraseña(hash)

*/

module.exports = AuthService;