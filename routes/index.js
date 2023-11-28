const express = require('express')
const route = express.Router()
const authRoutes = require('./auth.route')
const coursesRoutes = require('./courses.route')


route.use('/auth', authRoutes)
route.use('/courses', coursesRoutes)

route.get('/', (req,res)=>{
    res.json("Welcome to SkillMastery")
})

module.exports = route