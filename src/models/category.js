const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Category = sequelize.define(
  "categories",
  {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      primaryKey: true,
      autoIncrement: true
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

module.exports = Category;
