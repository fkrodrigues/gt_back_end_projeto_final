const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const Product = require('../models/product');

router.post('/create', async (req, res) => {
    productController.create(req, res, Product)
  });

router.put('/update/:id', async (req, res) => {
    productController.update(req, res, Product)
  });

router.get('/:id', async (req, res) => {
    productController.findById(req, res, Product)
  });

router.delete('/delete/:id', async (req, res) => {
    productController.deleteById(req, res, Product)
  });

  
module.exports = router;