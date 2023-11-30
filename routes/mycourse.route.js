const express = require('express')
const { getMyCourse } = require('../controllers/mycourse.controller')
const route = express.Router()
const authToken = require('../middlewares/auth.middleware')

route.get('/:id', authToken, getMyCourse)

module.exports = route
