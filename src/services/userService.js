

async function createUser(User, data) {
    return await User.create(data);
  }
  
  async function listAll(User) {
      return await User.findAll();
    }

  async function findById(User, id) {
      return await User.findByPk(id);
    }

  async function update(User, data, id) {
     
      return await User.update( data, { where: { id: id}});
    }
    
  async function deleteById(User, id) {
    
      return await User.destroy( { where: { id: id}});
    }
    

  module.exports = { createUser, listAll, findById, update, deleteById };