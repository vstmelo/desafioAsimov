const express = require('express');
const  login  = require('../controllers/LoginController');
const newroute = express ();


newroute.post('/login', login.login);


module.exports = newroute;