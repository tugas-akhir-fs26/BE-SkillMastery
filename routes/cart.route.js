const express = require('express');
const { addToCart, getCartByID, deleteCartsByIdCart } = require('../controllers/cart.controller');
const route = express.Router()


route.post("/", addToCart)
route.get("/:id", getCartByID)
route.delete("/:id", deleteCartsByIdCart)


module.exports = route