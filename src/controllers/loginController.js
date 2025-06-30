const jwt = require('jsonwebtoken');
const loginService = require("../services/loginService");
const bcrypt = require("bcrypt");


async function generateToken(req, res, User) {
    const { password, email } = req.body;
  
    if (!password || !email ) {
      return res.status(400).json({ error: "Todos os campos são obrigatórios!" });
    }
  
    try {
      const user =  await loginService.findOne(User, req.body);
      const isMatch =  bcrypt.compare(password, user.password);

        if (!isMatch) {
          return res.status(401).json({ error: 'Senha Inválida!'});
      }

      const token = jwt.sign({ id: user.id, email: user.email }, process.env.SECRET_KEY, { expiresIn: '1h'});
     
      res.status(200).json({ token: token});
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  module.exports = { generateToken };