const express = require('express');

const  newRoute  = require('./routes/route');

const app = express();

var bodyParser = require('body-parser');

app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }));

app.use(newRoute);

app.use(
    bodyParser.json({
        limit: "1mb",
    }),
)

app.listen(8000, function(){
    console.log("servidor ligado porta " + 8000);
});
