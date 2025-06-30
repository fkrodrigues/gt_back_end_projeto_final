

async function createCategory(Category, data) {
    return await Category.create(data);
  }

  async function update(Category, data, id) {
    return await Category.update( data, { where: { id: id}});
  }

  async function findById(Category, id) {
    return await Category.findByPk(id);
  }

  async function deleteById(Category, id) {
    return await Category.destroy( { where: { id: id}});
  }

  module.exports = { createCategory, update, findById,deleteById};