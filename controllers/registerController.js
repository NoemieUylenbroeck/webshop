const express = require("express");
let registerModel = require('../models/registerModel');

module.exports={
    //Fonction pour display register.ejs
    display:function(req, res) {
       res.render('../views/register');
   },
   //Fonction pour enregistrer un user
   register:(req, res) => {
       let username = req.body.username;
       let email = req.body.email;
       let password = req.body.password;
       //import User de registerModel
       let newUser = new registerModel.User({
               username:username,
               email:email,
               password:password
           });
           newUser.save();
           res.send(newUser);
       }
   }

