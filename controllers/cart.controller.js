// @ts-nocheck
const { Carts, Course, Mentor, User } = require("../models");

module.exports = {
  addToCart: async (req, res) => {
    try {
      const { userID, courseID, subtotal } = req.body;

      const cart = await Carts.create({
        userID: userID,
        courseID: courseID,
        subtotal: subtotal,
      });

      res.status(201).json({
        ok: true,
        data: cart,
      });
    } catch (error) {
      res.status(400).json({
        ok: false,
        message: error,
      });
    }
  },
  getCartByID: async (req, res) => {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          ok: false,
          message: "id kosong",
        });
      }

      const cart = await Carts.findAll({
        where: {
          userID: id,
        },
        include: [
          {
            model: Course,
            attributes: ["title", "price", "short_desc", "image"],
            include: [
              {
                model: Mentor,
                include: [
                  {
                    model: User,
                    attributes: ["Name", "Avatar"],
                  },
                ],
              },
            ],
          },
        ],
      });

      res.status(201).json({
        ok: true,
        message: "Berhasil mendapatkan data carts",
        data: cart,
      });
    } catch (error) {
      res.status(400).json({
        ok: false,
        message: error,
      });
    }
  },
  deleteCartsByIdCart: async (req, res) => {
    try {
      const { id } = req.params;
      
      if (!id) {
        return res.status(400).json({
          ok: false,
          message: "id kosong",
        });
      }

      const cart = await Carts.destroy({
        where: {
          id: id,
        },
      });

      res.status(201).json({
        ok: true,
        message: "Berhasil menghapus data carts",
      });
    } catch (error) {
      res.status(400).json({
        ok: false,
        message: error,
      });
    }
  },
};

