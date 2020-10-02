const express = require("express");
const mongoose=require("mongoose");
let router = require(__dirname + "/app/router.js");
const app = express();

mongoose.connect('mongodb://localhost:27017/test',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log("Connected to db (27017)"))
  .catch(() => console.log("Connection to db failed"));

app.use(express.static("\public"));

app.use(router);

app.listen(3000, function(){
    console.log("Server on 3000 activated.");
})