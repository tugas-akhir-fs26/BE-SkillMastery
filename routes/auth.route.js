const express = require('express');
const { login, register, getDataUserByID, UpdateDataUser } = require('../controllers/auth.controller');
const authToken = require('../middlewares/auth.middleware')
const route = express.Router();

route.post('/login', login)
route.post('/register', register)
route.get('/user/:id', authToken, getDataUserByID)
route.put('/user/:id', authToken, UpdateDataUser)


module.exports = route