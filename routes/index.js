const express = require('express')
const route = express.Router()
const authRoutes = require('./auth.route')
const coursesRoutes = require('./courses.route')
const reviewRoutes = require('./review.route')
const MentorRoutes = require('./mentor.route')
const mycourseRoutes = require('./mycourse.route')
const cartRoutes = require('./cart.route')
const checkoutRoutes = require('./checkout.route')


route.use('/auth', authRoutes)
route.use('/courses', coursesRoutes)
route.use('/reviews', reviewRoutes)
route.use('/mentors', MentorRoutes)
route.use('/my-course', mycourseRoutes)
route.use('/cart', cartRoutes)
route.use('/checkout', checkoutRoutes)

route.get('/', (req,res)=>{
    res.json("Welcome to SkillMastery Endpoint")
})

module.exports = route