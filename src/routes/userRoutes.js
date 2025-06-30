const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const User = require('../models/user');

router.post('/create', async (req, res) => {
    userController.create(req, res, User)
  });

router.get('/listAll', async (req, res) => {
    userController.listAll(req, res, User)
  });

router.get('/:id', async (req, res) => {
    userController.findById(req, res, User)
  });

router.put('/update/:id', async (req, res) => {
    userController.update(req, res, User)
  });

router.delete('/delete/:id', async (req, res) => {
    userController.deleteById(req, res, User)
  });


  
module.exports = router;