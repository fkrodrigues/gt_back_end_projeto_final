

async function findOne(User, data) {
    return await User.findOne({ where: { email: data.email }});
  }

module.exports = { findOne };