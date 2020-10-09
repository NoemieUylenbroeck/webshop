const bcrypt = require('bcrypt');
let registerModel = require('../models/registerModel');
const express = require('express');
const router = express.Router();
 
module.exports={
    //Fonction pour display register.ejs
    display:function(req, res) {
       res.render('../views/signin');
   },
   //Fonction pour enregistrer un user
   signin: async (req, res) => {
       let user = await registerModel.User.findOne({ Username: req.body.username });
       if (!user) {
           return res.status(400).send('Incorrect username or password.');
        }
        const validPassword = await bcrypt.compare(req.body.password, user.Password);
        if (!validPassword) {
            return res.status(400).send('Incorrect email or password.');
        }
        res.render('../views/home');
    }
}