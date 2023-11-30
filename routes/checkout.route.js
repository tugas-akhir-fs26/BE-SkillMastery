const express = require('express');
const { checkout } = require('../controllers/checkout.controller');
const route = express.Router()


route.post("/", checkout)


module.exports = route