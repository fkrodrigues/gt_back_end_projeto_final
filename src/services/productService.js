

async function createProduct(Product, data) {
    return await Product.create(data);
  }

  async function update(Product, data, id) {
    return await Product.update( data, { where: { id: id}});
  }

  async function findById(Product, id) {
    return await Product.findByPk(id);
  }

  async function deleteById(Product, id) {
    return await Product.destroy({ where: { id: id}});
  }

  module.exports = { createProduct, update, findById, deleteById};