const express = require('express');
const { getReviewByID, addReview } = require('../controllers/review.controllers');
const route = express.Router()


route.get("/:id", getReviewByID)
route.post("/", addReview)


module.exports = route