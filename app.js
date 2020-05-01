var express = require('express');
var app = express();
var request = require('request');

app.set("view engine", "ejs");

// ROUTES:
app.get('/', function(req, res){
    res.render('landing');
});

app.get('/campgrounds', function(req, res){
    var campgrounds = [
        {name: "Salmon Creek", image: "https://pixabay.com/get/52e5d7414355ac14f1dc84609620367d1c3ed9e04e5074417d2d7fdd964fc7_340.jpg"},
        {name: "Granite Hill", image: "https://pixabay.com/get/57e8d1464d53a514f1dc84609620367d1c3ed9e04e5074417d2d7fdd964fc7_340.jpg"},
        {name: "Bieszkowice", image: "https://pixabay.com/get/57e8d0424a5bae14f1dc84609620367d1c3ed9e04e5074417d2d7fdd964fc7_340.jpg"}
    ]
    res.render('campgrounds');
});
    



// PORT LISTENING:
app.listen(3000, () => console.log('server connected'));
