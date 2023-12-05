// @ts-nocheck
const jwt = require("jsonwebtoken");
const { User } = require("../models");

const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ where: { email: email } });
      if (!user) {
        return res.status(400).json({
          ok: false,
          message: "invalid user",
        });
      }

      if (bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign(
          { id: user.id, email: user.email, name: user.Name },
          "skillmastery"
        );

        res.status(200).json({
          ok: true,
          message: "login berhasil",
          userId: user.id,
          Avatar: user.Avatar,
          token,
        });
        return;
      }

      res.status(400).json({
        ok: false,
        message: "invalid password",
      });
    } catch (error) {
      res.json(error.message);
    }
  },

  register: async (req, res) => {
    const { Name, email, password } = req.body;
    if (
      !Name ||
      !email ||
      !password ||
      Name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === ""
    ) {
      return res.status(400).json({
        ok: false,
        message: "Data tidak boleh kosong",
      });
    }

    const hash = bcrypt.hashSync(password, saltRounds);
    

    await User.create({ Name: Name, email: email, password: hash });

    res.status(201).json({
      ok: true,
      message: "berhasil mendaftar data user",
    });
  },
  getDataUserByID: async (req, res) => {
    const {id} = req.params
    const data = await User.findOne({where : {id : id}});

    res.status(201).json({
      ok: true,
      data : data
    });
  },
  UpdateDataUser: async (req, res) => {
    try {
      const { id } = req.params;
      const { Name, Avatar } = req.body;
  
      // Find the existing user data
      const existingUserData = await User.findOne({ where: { id: id } });
  
      // Check if the user exists
      if (!existingUserData) {
        return res.status(404).json({
          ok: false,
          message: "User not found",
        });
      }
  
      // Update the fields only if they are provided in the request
      const updatedUserData = {};
      if (Name !== undefined) {
        updatedUserData.Name = Name;
      }
      if (Avatar !== undefined) {
        updatedUserData.Avatar = Avatar;
      }
  
      // Perform the update
      const data = await User.update(updatedUserData, { where: { id: id } });
  
      res.status(201).json({
        ok: true,
        message: "berhasil update data",
      });
    } catch (error) {
      res.status(500).json({
        ok: false,
        error: error.message,
      });
    }
  },
  
};
