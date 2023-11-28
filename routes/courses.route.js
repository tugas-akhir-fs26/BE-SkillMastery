const express = require('express');
const {getCourses, getCoursesByID} = require('../controllers/courses.controller')
const route = express.Router()


route.get("/", getCourses)
route.get("/:id", getCoursesByID)


module.exports = route