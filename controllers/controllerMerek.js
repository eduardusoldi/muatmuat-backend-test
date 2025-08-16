const { Merek } = require("../models");

class ControllerMerek {
  static async createMerek(req, res, next) {
    try {
      let { name, deskripsi } = req.body;
      if (!name) throw { status: 400, msg: "Please insert merek's name." };
      if (!deskripsi)
        throw { status: 400, msg: "Please insert merek's description" };

      let merekData = await Merek.create({
        name, deskripsi
      })
      res.status(201).json(merekData)
    } catch (error) {
        next(error)
    }
  }
}

module.exports = ControllerMerek