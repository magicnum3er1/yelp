var express         = require('express');
var app             = express();
var request         = require('request');
var bodyParser      = require("body-parser");
var mongoose        = require('mongoose');

// Mongoose:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 mongoose.connect('mongodb://localhost/yelp_camp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

// Schema setup:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//     {
//         name: "dupa",
//         image: "https://g7.gazetaprawna.pl/p/_wspolne/pliki/3322000/3322811-jezioro-kluczysko-lezy-w-obrebie.jpg",
//         description:"Rubbish everywhere, lot of drunk hillbillies and a smell of shit"
//     }, function(err, campground){
//         if(err){
//             console.log(err);
//         } else {

//             console.log("newly created camp");
//             console.log(campground);
//         }
//     });


// ROUTES:
app.get('/', function(req, res){
    res.render('landing');
});

app.get('/campgrounds', function(req, res){
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else{
            res.render('index', {campgrounds:allCampgrounds});
        }
    })
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs")
});

app.get("/campgrounds/:id", function(req, res){
    res.render("show")
})

//  POST ROUTE:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~   
app.post("/campgrounds",function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image}
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err)
        } else {
            res.redirect("/campgrounds")
        }
    })
   });





// PORT LISTENING:
app.listen(3000, () => console.log('server connected'));
