let homeModel=require('../models/homeModel');

module.exports={
    //Fonction pour display home.ejs
    display:function(req, res) {
       res.render('../views/home');
   }
}