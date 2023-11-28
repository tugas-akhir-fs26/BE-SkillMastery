// @ts-nocheck
const { Course } = require("../models");

module.exports = {
  getCourses: async (req, res) => {
    try {
      const data = await Course.findAll({ limit: 4 });
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
};
