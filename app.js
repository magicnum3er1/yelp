var express = require('express');
var app = express();
var request = require('request');
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

var campgrounds = [
    {name: "Salmon Creek", image: "https://www.globtroter.pl/zdjecia/polska/b280888_polska_kaszuby_pojezierze_kaszubskie.jpg"},
    {name: "Granite Hill", image: "https://polskiepomorze.pl/images/intro/pojezierze-kaszubskie.jpg"},
    {name: "Bieszkowice", image: "https://img4.garnek.pl/a.garnek.pl/009/807/9807159_800.0.jpg/pojezierze-kaszubskie.jpg"},
    {name: "Bieszkowice", image: "https://img4.garnek.pl/a.garnek.pl/009/807/9807159_800.0.jpg/pojezierze-kaszubskie.jpg"},
    {name: "Bieszkowice", image: "https://img4.garnek.pl/a.garnek.pl/009/807/9807159_800.0.jpg/pojezierze-kaszubskie.jpg"}
]

// ROUTES:
app.get('/', function(req, res){
    res.render('landing');
});

app.get('/campgrounds', function(req, res){
    
    res.render('campgrounds', {campgrounds:campgrounds});

});

    
app.post("/campgrounds",function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image}
    campgrounds.push(newCampground);
    res.redirect("/campgrounds")


});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs")
})



// PORT LISTENING:
app.listen(3000, () => console.log('server connected'));
