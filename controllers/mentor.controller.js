// @ts-nocheck
const { Mentor, Mentor_Profiles, User } = require("../models");

module.exports = {
  getMentorByID: async (req, res) => {
    const { id } = req.params;

    const mentor = await Mentor.findAll({
      where: { userID: id },
      include: [
        {
          model: User,
          attributes: ["Name", "avatar"],
        },
        {
          model: Mentor_Profiles,
          attributes: ["bio"],
        },
      ],
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

      // Check if a mentor with the given userID already exists
      const existingMentor = await Mentor.findOne({
        where: { userID: userId },
      });

      if (existingMentor) {
        // Jika mentor dengan userID sudah ada, kirim respon yang sesuai
        return res.status(400).json({
          ok: false,
          message: "Mentor dengan userID tersebut sudah ada",
        });
      }

      // Jika belum ada, buat mentor baru
      const data = await Mentor.create({
        userID: userId,
      });

      res.status(201).json({
        ok: true,
        message: "Berhasil mendaftar mentor",
        data: data,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        ok: false,
        message: "Terjadi kesalahan saat menciptakan mentor",
        error: error.message,
      });
    }
  },
  addMentorBio: async (req, res) => {
    try {
      const {userID,mentorID, bio, skill } = req.body;

      const mentor = await Mentor_Profiles.create({
        userID: parseInt(userID),
        mentorID: mentorID,
        bio: bio,
        skill: skill,
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
