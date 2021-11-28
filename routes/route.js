const express = require('express');
const login = require('../controllers/LoginController');
const newroute = express.Router();

//criando uma rota /login e um novo user.
const users = [{
    user: "Isaac",
    password: "asimov",
    id: 1,
},
{
    user: "Hermes",
    password: "mtv",
    id: 2,
},
{
    user: "Renato",
    password: "show",
    id: 3,
},
];
let nexId = 3;

newroute.post('/login', (req, res) => {

    const newuser =
    {
        user: req.body.user,
        password: req.body.password,
    }
    if (users.find(
        (newuser) => (newuser.user === req.body.user &&  newuser.password === req.body.password)))
        {

        res.json("Usuario logado");
    }else{
        res.json("Nop");
    }


});





module.exports = newroute;