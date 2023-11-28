// @ts-nocheck
const { where } = require("sequelize");
const { Course } = require("../models");

module.exports = {
  getCourses: async (req, res) => {
    try {
      const data = await Course.findAll({ limit: 8 });
      if (data.length > 0) {
        res.status(200).json({
          ok: true,
          data: data,
        });
      }
    } catch (error) {
      console.error(error);
    }
  },
  getCoursesByID: async (req, res) => {
    try {
      const { id } = req.params;
      const data = await Course.findAll({ where: { id: id } });

      if (data.length > 0) {
        res.status(200).json({
          ok: true,
          data: data,
        });
      }

      res.status(400).json({
        ok: false,
        message: "Error saat pengambilan data!",
      });
    } catch (error) {
      console.error(error);
    }
  },
  addCourse: async (req, res) => {
    try {
      const {
        title,
        price,
        description,
        short_desc,
        notes,
        duration,
        image,
        category,
        mentorID,
      } = req.body;
      const data = await Course.create({
        title: title,
        price: price,
        description: description,
        short_desc: short_desc,
        notes: notes,
        duration: duration,
        image: image,
        category: category,
        mentorID: mentorID,
      });

      res.status(201).json({
        ok: true,
        message: "Berhasil Membuat Course",
        data: data,
      });
    } catch (error) {
      console.error(error);
    }
  },
  deleteCourseByID: async (req, res) => {
    try {
      const { id } = req.params;
      await Course.destroy({ where: { id: id } });

      res.status(201).json({
        ok: true,
        message: "Berhasil Menghapus Course",
      });
    } catch (error) {
      console.error(error);
    }
  },

  editCourse: async (req, res) => {
    try {
      const { id } = req.params;
      const {
        title,
        price,
        description,
        short_desc,
        notes,
        duration,
        image,
        category,
      } = req.body;

      const existingCourse = await Course.findByPk(id);

      if (!existingCourse) {
        return res
          .status(404)
          .json({ error: "Kursus tidak ditemukan dalam database." });
      }

      // melakukan pengecekan ketika data ada yang hilang maka akan mengambil dari data sebelumnya
      // misalkan harga 200.000 namun ketika akan melakukan update kolom harga tidak diisi
      // maka akan mengambil nilai 200.000
      const updatedData = {
        title: title || existingCourse.title,
        price: price || existingCourse.price,
        description: description || existingCourse.description,
        short_desc: short_desc || existingCourse.short_desc,
        notes: notes || existingCourse.notes,
        duration: duration || existingCourse.duration,
        image: image || existingCourse.image,
        category: category || existingCourse.category,
      };

      //   Update data berdasarkan IDnya
      const data = await Course.update(updatedData, { where: { id: id } });

      res.status(201).json({
        ok: true,
        message: "Berhasil Mengedit Course",
      });
    } catch (error) {
      console.error(error);
    }
  },
};
