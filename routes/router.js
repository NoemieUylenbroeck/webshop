const express = require('express');
const bodyParser = require("body-parser");
let router = express.Router();

router.use(bodyParser.urlencoded({extended : true}));

const homeController=require('../controllers/homeController');
const aboutController=require('../controllers/aboutController');
const cartController=require('../controllers/cartController');
const checkoutController=require('../controllers/checkoutController');
const contactUsController=require('../controllers/contact-usController');
const galleryController=require('../controllers/galleryController');
const myAccountController=require('../controllers/my-accountController');
const registerController=require('../controllers/registerController');
const shopDetailController=require('../controllers/shop-detailController');
const shopController=require('../controllers/shopController');
const signinController=require('../controllers/signinController');
const wishlistController=require('../controllers/wishlistController');
const newsletterController=require('../controllers/newsletterController');

// Prend le controller avec la fonction correspondante
router.get('/', homeController.display );
router.get('/home', homeController.display );
router.get('/about', aboutController.display);
router.get('/cart', cartController.display);
router.get('/checkout', checkoutController.display);
router.get('/contact-us', contactUsController.display);
router.get('/gallery', galleryController.display );
router.get('/my-account', myAccountController.display);
router.get('/register',registerController.display);
router.post('/register', registerController.register);
router.get('/shop-detail', shopDetailController.display);
router.get('/shop', shopController.display);
router.get('/signin', signinController.display);
router.post('/signin', signinController.signin);
router.get('/wishlist', wishlistController.display);
router.post('/newsletter', newsletterController.newsletter);

module.exports = router;