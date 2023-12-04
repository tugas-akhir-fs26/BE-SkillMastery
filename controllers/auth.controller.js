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
};
