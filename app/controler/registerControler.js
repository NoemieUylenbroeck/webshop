const express = require ("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static("\public"));
app.use(bodyParser.urlencoded({extended : true}));


// Appeler register.html
// app.get("/", function(req,res){
//     res.sendFile(__dirname + "/signup.html");
// });

app.post("/", function(req,res){
    let firstname = req.body.Firstname;
    let lastname = req.body.Lastname;
    let email = req.body.email;
    let password = req.body.password;
    console.log(firstname, lastname, email,password);
    res.send("see consol")
});