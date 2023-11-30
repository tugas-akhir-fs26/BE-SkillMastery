// @ts-nocheck
const { Reviews } = require("../models");

module.exports = {
  getReviewByID: async (req, res) => {
    try {
      const { id } = req.params;
      const reviews = await Reviews.findAll({
        where: { courseID: id },
      });

      if (reviews.length > 0) {
        return res.status(200).json({
          ok: true,
          data: reviews,
        });
      }
      res.status(400).json({
        ok: true,
        message: "course tidak memiliki review",
      });
    } catch (error) {
      console.log(error);
    }
  },
  addReview: async (req, res) => {
    try {
      const { userID, courseID, rating, comment } = req.body;
      const reviews = await Reviews.create({
        userID: userID,
        courseID: courseID,
        rating: rating,
        comment: comment,
      });

      res.status(200).json({
        ok: true,
        message: "Review berhasil dibuat.",
        data: reviews,
      });
    } catch (error) {
      console.error(error);

      // Jika terjadi kesalahan saat pembuatan review
      res.status(500).json({
        ok: false,
        message: "Gagal membuat review. Terjadi kesalahan server.",
      });
    }
  },
};
