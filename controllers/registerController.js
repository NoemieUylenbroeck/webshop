let registerModel = require('../models/registerModel');
const bcrypt = require('bcrypt');
const passport = require('passport');
let User = registerModel.User;

module.exports={
    //Fonction pour display register.ejs
    display:function(req, res) {
       res.render('../views/register');
   } ,
   //Fonction pour enregistrer un user sans passport
//    register: async (req, res) => {
//         let user = await registerModel.User.findOne({ email: req.body.email });
//         if (user) {
//             return res.status(400).send('That user already exists!');
//         } else {
//             // Insert the new user if they do not exist yet
//             user = new registerModel.User({
//                 Username: req.body.username,
//                 Email: req.body.email,
//                 Password: req.body.password
//             });
//             const salt = await bcrypt.genSalt(10);
//             user.Password = await bcrypt.hash(user.Password, salt);
//             await user.save();
//             res.redirect('../signin');
//     }
//        }
//Enregistrement d'un user avec passport
    register: function (req, res) {
        User.register({username : req.body.username, email : req.body.email}, req.body.password, function(err, user) {
            if (err) {
                console.log(err);
                res.redirect("/register");
            } else{
                passport.authenticate("local")(req,res,function(){
                    res.redirect("/signin");
                })
            }
        })
    }
}
