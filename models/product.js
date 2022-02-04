'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    tableName: 'products',
    modelName: 'Product',
  });
  return Product;
};