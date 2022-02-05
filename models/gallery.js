'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gallery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Gallery.init({
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    productId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'products',
        key: 'id',
      },
    }
  },{
    sequelize,
    tableName: 'gallery',
    modelName: 'Gallery',
  });
  return Gallery;
};