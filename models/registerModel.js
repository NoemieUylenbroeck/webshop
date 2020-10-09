const mongoose = require("mongoose");
const passport = require("passport");
const passportLocalMongoose = require ("passport-Local-mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    //en utilisant passport il faut pas mettre un password dans le schéma
    // password:{
    //     type:String,
    //     required:true,
    // },
});

//Use passportLocalMongoose
userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);

//Use passport (va permettre de créer et détruire les info de sessions)
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

exports.User = User;