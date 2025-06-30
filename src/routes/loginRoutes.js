const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');
const User = require('../models/user');


router.post('/token', async (req, res) => {
    loginController.generateToken(req, res, User)
  });



  module.exports = router;