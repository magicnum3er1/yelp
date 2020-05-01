var express = require('express');
var app = express();

var request = require('request');

app.set("view engine", "ejs");


app.get('/', function(req, res){
    res.render('landing');
});




app.listen(3000, () => console.log('server connected'));
