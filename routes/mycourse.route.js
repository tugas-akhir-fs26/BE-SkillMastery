const express = require('express')
const { getMyCourse } = require('../controllers/mycourse.controller')
const route = express.Router()

route.get('/:id', getMyCourse)

module.exports = route
