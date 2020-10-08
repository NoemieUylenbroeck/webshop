const express = require("express");
let registerModel = require('../models/registerModel');

module.exports={
    //Fonction pour display register.ejs
    display:function(req, res) {
       res.render('../views/register');
   },
   //Fonction pour enregistrer un user
   register: async (req, res) => {
        let user = await registerModel.User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).send('That user already exists!');
        } else {
            // Insert the new user if they do not exist yet
            user = new registerModel.User({
                Username: req.body.username,
                Email: req.body.email,
                Password: req.body.password
            });
            await user.save();
            res.render('../views/register');
    }
       }
   }

