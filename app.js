const express = require("express");
const mongoose=require("mongoose");
const app = express();

//Syntaxe pour utiliser EJS + pouvoir utiliser CSS/images
app.set('view engine', 'ejs');
app.use(express.static("\public"));

//Connexion database
mongoose.connect('mongodb://localhost:27017/webshop',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log("Connected to db (27017)"))
  .catch(() => console.log("Connection to db failed"));

//Renvoyer vers le router
let router = require('./routes/router');
app.use(router);

app.listen(3000, function(){
    console.log("Server on 3000 activated.");
})