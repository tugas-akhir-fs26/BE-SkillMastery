const express = require('express');
const {getCourses} = require('../controllers/courses.controller')
const route = express.Router()


route.get("/", getCourses)


module.exports = route