const express = require("express");
let router = express.Router();

// define the routes
router.get('/index.html', function(req, res) {
  res.sendFile(__dirname+"/views/index.html");
});


router.get('/cart.html', function(req, res) {
    res.sendFile(__dirname+"/views/cart.html");
});


router.get('/my-account.html', function(req, res) {
    res.sendFile(__dirname+"/views/my-account.html");
});

router.get('/checkout.html', function(req, res) {
    res.sendFile(__dirname+"/views/checkout.html");
});
  
router.get('/contact-us.html', function(req, res) {
    res.sendFile(__dirname+"/views/contact-us.html");
});
  
router.get('/gallery.html', function(req, res) {
    res.sendFile(__dirname+"/views/gallery.html");
});
  
router.get('/shop-detail.html', function(req, res) {
    res.sendFile(__dirname+"/views/shop-detail.html");
});
  
router.get('/shop.html', function(req, res) {
    res.sendFile(__dirname+"/views/shop.html");
});
  
router.get('/wishlist.html', function(req, res) {
    res.sendFile(__dirname+"/views/wishlist.html");
});
  
router.get('/about.html', function(req, res) {
    res.sendFile(__dirname+"/views/about.html");
});

router.get('/signin.html', function(req, res) {
    res.sendFile(__dirname+"/views/signin.html");
});

router.get('/register.html', function(req, res) {
    res.sendFile(__dirname+"/views/register.html");
});
module.exports = router;