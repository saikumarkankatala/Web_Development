var express = require('express');
var app = express();
var expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);

app.set('view engine', 'ejs');
var movieNames = [{ name:"RRR",Hero:"NTR", Heroine : "Olivia", director: "Rajamouli"},
{
    name:"Avatar",Hero:"Sam Worthington", Heroine : "Zoe Saldaña", director: "James Cameron"
},
{
    name:"Pirates of the Caribbean",Hero:"Johnny Depp", Heroine : "Keira Knightley", director: "Rob Marshall"
},
{
    name:"Sita Ramam",Hero:"Dulquer Salmaan", Heroine : "Mrunal Thakur", director: "Hanu Raghavapudi"
},{
    name:"K.G.F",Hero:"Yash", Heroine : "Srinidhi", director: "Prashanth Neel"
},{
    name:"Titanic",Hero:"Leonardo DiCaprio", Heroine : "Kate Winslet", director: "James Cameron"
},{
    name:"Avengers",Hero:"Robert Downey Jr.", Heroine : "Scarlett Johansson", director: "Joe Russo"
},{
    name:"The Batman",Hero:"Robert Pattinson", Heroine : "Zoë Kravit", director: "Matt Reeves"
},{
    name:"777 Charlie",Hero:"Rakshit Shetty", Heroine : "Sangeetha Sringeri", director: "Kiranraj"
},{
    name:"3 Idiots",Hero:"Aamir Khan", Heroine : "Kareena Kapoor", director: "Rajkumar Hirani"
},
]
app.get('/', function(req,res){
    res.render('home',{pawprint:"skb3c"});
})
app.get('/about', function(req,res){
    res.render('about',{name:"Sai Kankatala"});
})

app.get('/movieDetails', function(re,res){
    res.render('movie',{movieNames})
})
app.listen(3000, function(err){
    if(err) console.log(err);
    console.log("Server listening")
})