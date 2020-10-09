let newsletterModel = require('../models/newsletterModel');

module.exports={
   //Fonction pour enregistrer un user
   newsletter: async (req, res) => {
        let mailNewsletter = await newsletterModel.Newsletter.findOne({ Email: req.body.email });
        if (mailNewsletter) {
            return res.status(400).send('Already subscribed to the newsletter');
        } else {
            // Insert the new user if they do not exist yet
            mailNewsletter = new newsletterModel.Newsletter({
                Email: req.body.email,
            });
            await mailNewsletter.save();
            res.render('../views/home');
    }
       }
   }