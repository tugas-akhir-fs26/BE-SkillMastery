const express = require('express');
const {getCourses, getCoursesByID, addCourse, deleteCourseByID, editCourse, getCourseByName, getMentorCourse, getPaginationCourse} = require('../controllers/courses.controller')
const route = express.Router()
const authToken = require('../middlewares/auth.middleware')


route.get("/", getCourses)
route.get("/course", getPaginationCourse)
route.get("/search", getCourseByName)
route.get("/mentor", authToken, getMentorCourse)
route.get("/:id",getCoursesByID)
route.post("/", authToken, addCourse)
route.delete("/:id", authToken, deleteCourseByID)
route.put("/:id", authToken, editCourse)


module.exports = route