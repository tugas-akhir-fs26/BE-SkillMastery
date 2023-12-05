const express = require('express');
const { checkout, getDataEnrollmentUser } = require('../controllers/checkout.controller')
const authToken = require('../middlewares/auth.middleware')
const route = express.Router()


route.post("/", authToken ,checkout)
route.get("/user/:id", authToken ,getDataEnrollmentUser)


module.exports = route