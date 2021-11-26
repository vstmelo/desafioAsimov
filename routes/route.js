const express = require('express');
const  login  = require('../controllers/LoginController');
const newroute = express ();


newroute.post('./controllers/LoginController', login.login);


module.exports = newroute;