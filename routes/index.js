const express = require('express')
const route = express.Router()
const authRoutes = require('./auth.route')


route.use('/auth', authRoutes)

route.get('/', (req,res)=>{
    res.json("Welcome to SkillMastery")
})

module.exports = route