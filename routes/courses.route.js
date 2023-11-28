const express = require('express');
const {getCourses, getCoursesByID, addCourse, deleteCourseByID, editCourse} = require('../controllers/courses.controller')
const route = express.Router()


route.get("/", getCourses)
route.get("/:id", getCoursesByID)
route.post("/", addCourse)
route.delete("/:id", deleteCourseByID)
route.put("/:id", editCourse)


module.exports = route