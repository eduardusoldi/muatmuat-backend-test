const { Product, Merek, Sequelize, sequelize } = require("../models");
const { Op } = require("sequelize");

class ControllerProduct {
  static async createProduct(req, res, next) {
    try {
      let { name, price, stock, deskripsi, MerekId } = req.body;
      if (!name) throw { status: 400, msg: "Please insert product's name." };
      if (!price) throw { status: 400, msg: "Please insert product's price." };
      if (!stock) throw { status: 400, msg: "Please insert product's stock." };
      if (!deskripsi)
        throw { status: 400, msg: "Please insert product's description" };

      if (MerekId) {
        let dataMerek = await Merek.findOne({ where: { id: MerekId } });
        if (!dataMerek)
          throw { status: 404, msg: "Merek Id tidak ditemukan di database." };
      }

      let productData = await Product.create({
        name,
        price,
        stock,
        deskripsi,
        MerekId,
      });
      res.status(201).json(productData);
    } catch (error) {
      next(error);
    }
  }

  static async getProduct(req, res, next) {
    try {
      const { orderBy } = req.query;
      let option = {
        order: [[orderBy, "asc"]],
        where: {
          isDeleted: false,
        },
      };
      if (req.query.sort === "desc") {
        option.order = [[orderBy, "desc"]];
      } else if (req.query.sort === "asc") {
        option.order = [[orderBy, "asc"]];
      } else {
        option.order = [[orderBy, "asc"]];
      }

      if (req.query.limit) {
        option.limit = req.query.limit;
      }

      if (req.query.name) {
        option.where = {
          isDeleted: false,
          name: { [Op.iLike]: `%${req.query.name}%` },
        };
      }
      if (req.query.price) {
        option.where = {
          isDeleted: false,
          price: { [Op.iLike]: `%${req.query.price}%` },
        };
      }
      if (req.query.stock) {
        option.where = {
          isDeleted: false,
          stock: { [Op.iLike]: `%${req.query.stock}%` },
        };
      }
      if (req.query.deskripsi) {
        option.where = {
          isDeleted: false,
          deskripsi: { [Op.iLike]: `%${req.query.deskripsi}%` },
        };
      }

      let productdata = await Product.findAll(option);
      if (!productdata.length) throw { status: 404, msg: "Product not found" };

      res.status(200).json(productdata);
    } catch (error) {
      next(error);
    }
  }

  static async getProductById(req, res, next) {
    try {
      let productData = await Product.findOne({
        where: {
          id: req.params.id,
        },
      });
      if (!productData)
        throw { status: 500, msg: "ID tidak ada dalam database." };
      res.status(200).json(productData);
    } catch (error) {
      next(error);
    }
  }

  static async editProduct(req, res, next) {
    try {
      let { name, price, stock, deskripsi } = req.body;
      let productData = await Product.findOne(
        { where: { id: req.params.id } },
        { returning: true }
      );
      if (!productData)
        throw { status: 500, msg: "ID tidak ada dalam database." };

      let existingProduct = await Product.findOne({ where: { name: name } });
      if (existingProduct)
        throw {
          status: 400,
          msg: "Nama produk sudah dipakai, tidak boleh kembar.",
        };
      await Product.update(
        { name, price, stock, deskripsi },
        { where: { id: req.params.id } }
      );
      let updatedProduct = await Product.findOne({
        where: { id: req.params.id },
      });

      res.status(200).json(updatedProduct);
    } catch (error) {
      next(error);
    }
  }

  static async deleteProduct(req, res, next) {
    try {
      let productData = await Product.findOne({
        where: { id: req.params.id },
      });
      if (!productData)
        throw { status: 500, msg: "ID tidak ada dalam database." };

      await Product.update(
        { isDeleted: true },
        { where: { id: req.params.id } }
      );

      res.status(200).json({
        message: `Sucessfully delete product with ID ${req.params.id}`,
      });
    } catch (error) {
      next(error);
    }
  }

  static async summaryProductAndMerek(req, res, next) {
    try {
      let totalProducts = await Product.count();
      let totalMereks = await Merek.count();

      res.status(200).json({
        totalProducts,
        totalMereks,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ControllerProduct;
