const userService = require("../services/userService");
const bcrypt = require("bcrypt");


async function create(req, res, User) {
  const { password, email, firstname, surname } = req.body;

  if (!password || !email || !firstname || !surname) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios!" });
  }

  const password_hash = await bcrypt.hash(password, 10);
  console.log(password_hash)

  try {
    const user = await userService.createUser(User, { firstname: firstname, surname: surname, email: email, password: password_hash});
    res.status(201).json({});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function listAll(req, res, User) {
  try {
    const users = await userService.listAll(User);
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function findById(req, res, User) {
  const { id } = req.params;

  try {
    const user = await userService.findById(User, id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function update(req, res, User) {
  const { password, email, firstname, surname } = req.body;
  const { id } = req.params;

  if (!password || !email || !firstname || !surname) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios!" });
  }
  try {
    const user = await userService.findById(User, id);
    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado!" });
    }
    const users = await userService.update(User, req.body, id);
    res.status(204).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function deleteById(req, res, User) {
  const { id } = req.params;
  
  try {
    const user = await userService.findById(User, id);
    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado!" });
    }
    const userDeleted = await userService.deleteById(User, id);
    res.status(204).json(userDeleted);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}



module.exports = { create, listAll, findById, update, deleteById };
