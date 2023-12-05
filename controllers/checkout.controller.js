// @ts-nocheck
const { Enrollments, Mentor, Course, User } = require("../models");

module.exports = {
  checkout: async (req, res) => {
    try {
      const checkoutData = req.body;

      // Assuming checkoutData is an array of objects
      for (const data of checkoutData) {
        const { userID, courseID, enrollment_date } = data;

        const existingEnrollment = await Enrollments.findOne({
          where: { userID, courseID },
        });

        if (existingEnrollment) {
          res.status(400).json({
            message: `Enrollment already exists for userID ${userID} and courseID ${courseID}`,
          });
          return;
        }

        await Enrollments.create({
          userID: userID,
          courseID: courseID,
          enrollment_date: enrollment_date,
        });
      }
      res.status(200).json({
        ok: true,
        message: "berhasil membeli course!",
      });
    } catch (error) {
      res.status(400).json({
        ok: false,
        error: error,
      });
    }
  },
  getDataEnrollmentUser: async (req, res) => {
    const { id } = req.params;
    try {
      const data = await Enrollments.findAll({
        where: { userID: id },
        include: [
          {
            model: Course,
            attributes: ["id", "title", "price", "short_desc", "image"],
          },
        ],
      });

      if (data.length > 0) {
        res.status(200).json({
          ok: true,
          message: data,
        });
      } else {
        res.status(404).json({
          ok: false,
          message: "No enrollment data found for the specified user ID",
        });
      }
    } catch (error) {
      res.status(500).json({
        ok: false,
        error: error.message,
      });
    }
  },
};
