var express = require('express');
const path = require('path');
var app = express();
const exphbs = require('express-handlebars');

app.engine('.hbs', exphbs({
    extname: '.hbs',
}));

app.set('view engine', '.hbs');


app.get('/', function(req, res){
    res.render('home');
});

app.listen(3000);