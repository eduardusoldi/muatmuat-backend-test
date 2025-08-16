"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Merek);
    }
  }
  Product.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: {
            msg: "Name is required.",
          },
          notEmpty: {
            msg: "Name is required.",
          },
          is: {
            args: [/^[\w\-\s]+$/],
            msg: "Tidak boleh selain angka dan huruf."
          }
        },
      },
      price: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Price is required.",
          },
          notEmpty: {
            msg: "Price is required.",
          },
          min: {
            args: [0],
            msg: "Harga tidak boleh minus",
          },
        },
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Stock is required.",
          },
          notEmpty: {
            msg: "Stock is required.",
          },
          min: {
            args: [0],
            msg: "Stock tidak boleh minus",
          },
        },
      },
      deskripsi: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Deskripsi is required.",
          },
          notEmpty: {
            msg: "Deskripsi is required.",
          },
        },
      },
      MerekId: {
        type: DataTypes.INTEGER,
      },
      isDeleted: {
        type: DataTypes.BOOLEAN
      }
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
