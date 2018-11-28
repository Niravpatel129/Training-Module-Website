var express = require('express');
const path = require('path');
var app = express();
const exphbs = require('express-handlebars');
var HTTP_PORT = process.env.PORT || 8009;

app.engine('.hbs', exphbs({
    extname: '.hbs',
}));

app.set('view engine', '.hbs');


app.get('/', function(req, res){
    res.render('home');
});

app.listen(process.env.PORT);
