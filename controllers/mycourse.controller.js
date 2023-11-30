// @ts-nocheck
const { User, Enrollments, Course, Mentor } = require("../models");

module.exports = {
  getMyCourse: async (req, res) => {
    try {
      const { id } = req.params;
      const userData = await User.findByPk(id);

      if (!userData) {
        return res.status(400).json({
          ok: false,
          message: "Data user tidak ditemukan",
        });
      }

      // Ambil data kursus yang telah dibeli oleh pengguna
      const enrollmentsData = await Enrollments.findAll({
        where: {
          userID: id,
        },
        include: [
          {
            model: Course,
            attributes: ["title", "short_desc", "image", "mentorID"],
            include: [
              {
                model: Mentor,
                attributes: [],
                include: [
                  {
                    model: User,
                    attributes: ["Name"],
                  },
                ],
              },
            ],
          },
        ],
      });

      // Struktur data pengguna dengan data kursus yang telah dibeli
      res.status(200).json({
        ok: true,
        data: enrollmentsData,
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
  },
};
