const productService = require("../services/productService");

async function create(req, res, Category) {
  const {enabled, name, slug, use_in_menu, stock, description, price, price_with_discount } = req.body;

  if (!enabled ||!name || !slug || !use_in_menu || !stock || !description   || !price || !price_with_discount ) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios!" });
  }

  try {
    const product = await productService.createProduct(Category, req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function findById(req, res, Product) {
  const { id } = req.params;
  const product = await productService.findById(Product, id);
    if (!product) {
      return res.status(404).json({ error: "Produto não encontrado!" });
    }
  try {
    const product = await productService.findById(Product, id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function update(req, res, Product) {
  const { id } = req.params;

  const {enabled, name, slug, use_in_menu, stock, description, price, price_with_discount } = req.body;

  if (!enabled ||!name || !slug || !use_in_menu || !stock || !description   || !price || !price_with_discount ) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios!" });
  }

    try {
    const product = await productService.findById(Product, id);
    if (!product) {
      return res.status(404).json({ error: "Categoria não encontrada!" });
    }
    const productUpdate = await productService.update(Product, req.body, id);
    res.status(204).json(productUpdate);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function deleteById(req, res, Product) {
  const { id } = req.params;
  
  try {
    const product = await productService.findById(Product, id);
    if (!product) {
      return res.status(404).json({ error: "Produto não encontrado!" });
    }
    const productDeleted = await productService.deleteById(Product, id);
    res.status(204).json(productDeleted);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}



module.exports = { create, update, findById, deleteById };
