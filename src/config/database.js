const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('digital_store', 'frank', '123456', {
  host: 'localhost',
  dialect: 'mysql',
  logging: console.log
});

module.exports = sequelize;