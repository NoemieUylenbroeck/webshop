const express = require("express");
const bodyParser = require("body-parser");
const session = require('express-session');
const mongoose=require("mongoose");
const passport = require("passport");
const passportLocalMongoose = require ("passport-Local-mongoose");
const app = express();

//Syntaxe pour utiliser body-parser
app.use(bodyParser.urlencoded({extended : true}));

//Syntaxe pour utiliser EJS + pouvoir utiliser CSS/images
app.set('view engine', 'ejs');
app.use(express.static("\public"));

//Use et set les options de express-session
app.use(session({
  secret: 'secret',
  resave: false, 
  saveUninitialized: false,
}));

//Set la variable de session (//$_SESSION)
let sess;

//Use passport
app.use(passport.initialize());
app.use(passport.session());

//Connexion database
mongoose.connect('mongodb://localhost:27017/webshop',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log("Connected to db (27017)"))
  .catch(() => console.log("Connection to db failed"));
mongoose.set("useCreateIndex",true);

//Renvoyer vers le router
let router = require('./routes/router');
app.use(router);

app.listen(3000, function(){
    console.log("Server on 3000 activated.");
})