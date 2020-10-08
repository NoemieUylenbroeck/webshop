let registerModel = require('../models/registerModel');
let User = registerModel.User

module.exports={
    //Fonction pour display signin.ejs
    display:function(req, res) {
       res.render('../views/signin');
   },
   signin:(req, res) => {
       let usernameForm = req.body.username;
       let passwordForm = req.body.password;
       let passwordDB = User.findOne({ 'Username' : usernameForm }, 'Password');
       if (passwordForm == passwordDB) {
           res.send('yes');
        } else {
            res.send('nope');
        }
    }
}