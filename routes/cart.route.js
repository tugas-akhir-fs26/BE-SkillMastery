const express = require('express');
const { addToCart, getCartByID, deleteCartsByIdCart } = require('../controllers/cart.controller');
const route = express.Router()
const authToken = require('../middlewares/auth.middleware')


route.post("/", authToken,addToCart)
route.get("/:id",authToken, getCartByID)
route.delete("/course/:id", authToken,deleteCartsByIdCart)


module.exports = route