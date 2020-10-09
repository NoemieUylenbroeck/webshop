const bcrypt = require('bcrypt');
let registerModel = require('../models/registerModel');
const express = require('express');
 
module.exports={
    //Fonction pour display register.ejs
    display:function(req, res) {
       res.render('../views/signin');
   },
   //Fonction pour signin un User sans passport
//    signin: async (req, res) => {
//        let user = await registerModel.User.findOne({ username: req.body.username });
//        if (!user) {
//            return res.status(400).send('Incorrect username or password.');
//         }
//         const validPassword = await bcrypt.compare(req.body.password, user.password);
//         if (!validPassword) {
//             return res.status(400).send('Incorrect email or password.');
//         }
//         res.redirect('../home');
//     }
    //Fonction pour vérifier si un User est bien authentifié avec passport local mongoose
    signin: function (req, res) {
        if(req.isAuthenticated()){
           res.redirect("../home");
        }else{
           res.redirect("/signin");
        }
   }
}