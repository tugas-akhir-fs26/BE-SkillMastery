// @ts-nocheck
const { Mentor, Mentor_Profiles } = require("../models");

module.exports = {
  getMentorByID: async (req, res) => {
    const { id } = req.params;

    const mentor = await Mentor.findAll({
      where: { userID: id },
    });

    if (mentor.length > 0) {
      return res.status(200).json({
        ok: true,
        data: mentor,
      });
    }

    res.status(400).json({
      ok: false,
      message: "data tidak tersedia",
    });
  },
  createMentor: async (req, res) => {
    try {
        const { id } = req.params;
        
        // Convert the id to a number
        const userId = parseInt(id, 10);

        const data = await Mentor.create({
            userID: userId,
        });

        res.status(201).json({
            ok: true,
            message: "berhasil mendaftar mentor",
            data: data,
        });
    } catch (error) {
      res.status(400).json({
        ok: false,
        message: "Gagal mendaftar mentor",
      });
    }
  },
  addMentorBio: async (req, res) => {
    try {
      const { userID, mentorID, bio, skill } = req.body;

      const mentor = await Mentor_Profiles.create({
        userID: userID,
        mentorID: mentorID,
        bio: bio,
        skill: JSON.stringify(skill),
      });

      res.status(201).json({
        ok: true,
        message: "Berhasil menambahkan profile mentor",
        data: mentor,
      });
    } catch (error) {
        console.log(error);
      res.status(400).json({
        ok: false,
        message: "Gagal menambahkan profile mentor",
      });
    }
  },
};
