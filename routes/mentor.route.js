const express = require('express')
const { getMentorByID, addMentorBio, createMentor } = require('../controllers/mentor.controller')
const route = express.Router()

route.get("/:id",getMentorByID)
route.post('/:id', createMentor)
route.post('/', addMentorBio)


module.exports = route