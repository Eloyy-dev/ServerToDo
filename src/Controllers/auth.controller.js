const authService = require('../Services/auth.service');
const jwt = require('jsonwebtoken');
const userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const data = await authService.login(email, password);

    const userData = {
      email: data.result.email,
      username: data.result.username,
      id: data.result.id
    };

    const token = jwt.sign(userData, 'todo2', { algorithm: 'HS512' });
    userData.token = token;
    res.json(userData);
    // result ?
    //   res.status(200).json({ message: 'logueado exitosamente' })
    //   :
    //   res.status(401).json({ message: 'contrasseña invalida' });
  } catch (error) {
    console.log(error);
    next({ status: 418, errorContent: error });
  }
};


module.exports = { userLogin };
