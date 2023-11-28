// @ts-nocheck
const jwt = require('jsonwebtoken');
const {User} = require("../models");

module.exports = {
  login: async (req, res) => {
    const userLogin = req.body 

    try {
      const user = await User.findOne({where : {email: userLogin.email}})
      if (!user) throw new Error("invalid user")
  
      console.log(user.password, userLogin.password);
      if (user.password !== userLogin.password) throw new Error("invalid user")
  
      const token = jwt.sign({id: user.id, email: user.email}, "testestestes")
  
      res.json({
        message: "login berhasil",
        userId: user.id,
        token,
      })
    } catch (error) {
      res.json(error.message)
    }
  },

  register: async (req, res) => {
    const {Name, email, password} = req.body;
    await User.create({Name : Name, email : email, password : password});

    res.status(201).json({
      message: "berhasil mendaftar data user",
    });
  },
}