const express = require('express');
const { getReviewByID, addReview } = require('../controllers/review.controllers');
const route = express.Router()
const authToken = require('../middlewares/auth.middleware')


route.get("/:id", getReviewByID)
route.post("/", authToken,addReview)


module.exports = route