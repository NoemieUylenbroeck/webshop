const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    Email:{
        type:String,
        required:true,
    }
});

const Newsletter = mongoose.model("Newsletter", userSchema);

exports.Newsletter = Newsletter;