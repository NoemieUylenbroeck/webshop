module.exports={
    //Fonction pour enregistrer un user
    signout: (req, res) => {
        req.logout();
        res.redirect('../home');
    }
}
