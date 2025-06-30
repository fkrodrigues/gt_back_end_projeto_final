const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const Category = require('../models/category');

router.post('/create', async (req, res) => {
  categoryController.create(req, res, Category)
  });

router.put('/update/:id', async (req, res) => {
  categoryController.update(req, res, Category)
  });

router.get('/:id', async (req, res) => {
  categoryController.findById(req, res, Category)
  });

router.delete('/delete/:id', async (req, res) => {
  categoryController.deleteById(req, res, Category)
  });

  
module.exports = router;