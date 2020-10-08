let registerModel = require('../models/registerModel');

module.exports={
    //Fonction pour display signin.ejs
    display:function(req, res) {
       res.render('../views/signin');
   },
   signin:(req, res) => {
       let usernameForm = req.body.username;
       let passwordForm = req.body.password;
       let passwordDB = registerModel.User.findOne({ 'Username': usernameForm }, 'Password');
       if (passwordForm == passwordDB) {
           res.render('../views/home');
        } else {
            res.render('../views/signin');
        }
    }
}