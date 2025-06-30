const categoryService = require("../services/categoryService");

async function create(req, res, Category) {
  const { name, slug, use_in_menu} = req.body;

  if (!name || !slug || !use_in_menu) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios!" });
  }
  try {
    const category = await categoryService.createCategory(Category, req.body);
    res.status(201).json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function findById(req, res, Category) {
  const { id } = req.params;
  const category = await categoryService.findById(Category, id);
    if (!category) {
      return res.status(404).json({ error: "Categoria não encontrada!" });
    }
  try {
    const category = await categoryService.findById(Category, id);
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function update(req, res, Category) {
  const { name, slug, use_in_menu} = req.body;
  const { id } = req.params;

  if (!name || !slug || !use_in_menu) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios!" });
  }
  try {
    const category = await categoryService.findById(Category, id);
    if (!category) {
      return res.status(404).json({ error: "Categoria não encontrada!" });
    }
    const categoryUpdate = await categoryService.update(Category, req.body, id);
    res.status(204).json(categoryUpdate);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function deleteById(req, res, Category) {
  const { id } = req.params;
  
  try {
    const category = await categoryService.findById(Category, id);
    if (!category) {
      return res.status(404).json({ error: "Categoria não encontrado!" });
    }
    const categoryDeleted = await categoryService.deleteById(Category, id);
    res.status(204).json(categoryDeleted);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}



module.exports = { create, update, findById, deleteById };
