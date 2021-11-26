const express = require('express');
const  newRoute  = require('./routes/route');


const app = express();


app.use(newRoute);

app.use(express.json());


app.listen(8000);



