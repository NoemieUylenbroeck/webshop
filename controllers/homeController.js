module.exports={
    //Fonction pour display home.ejs
    display:function(req, res) {
        sess=req.session;
        let sessionUsername= sess.username;
        res.render('../views/home',{sessionUsername : sessionUsername});
   }
}