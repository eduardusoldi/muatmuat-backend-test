'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Merek extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Merek.hasMany(models.Product)
    }
  }
  Merek.init({
    name: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Name is required."
        },
        notEmpty: {
          msg: "Name is required."
        }
      }
    },
    deskripsi: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Deskripsi is required."
        },
        notEmpty: {
          msg: "Deskripsi is required."
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Merek',
  });
  return Merek;
};