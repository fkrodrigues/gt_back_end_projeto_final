const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Product = sequelize.define(
  "products",
  {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    enabled: {
      type: DataTypes.BOOLEAN,
    },
    name: {
      type: DataTypes.STRING,
    },
    slug: {
      type: DataTypes.STRING,
    },
    use_in_menu: {
      type: DataTypes.BOOLEAN,
    },
    stock: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.FLOAT,
    },
    price_with_discount: {
      type: DataTypes.FLOAT,
    },
    created_at: {
      
      type: DataTypes.DATE
    },
    updated_at: {
     
      type: DataTypes.DATE
   }
  },
  {
    timestamps: true,
    createdAt: 'created_at', 
    updatedAt: 'updated_at'
  }
);

module.exports = Product;
