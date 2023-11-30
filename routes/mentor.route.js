const express = require('express')
const { getMentorByID, addMentorBio, createMentor } = require('../controllers/mentor.controller')
const route = express.Router()
const authToken = require('../middlewares/auth.middleware')

route.get("/:id",getMentorByID)
route.post('/:id', authToken,createMentor)
route.post('/', authToken,addMentorBio)


module.exports = route