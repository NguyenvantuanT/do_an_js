const express  = require('express');
const router = express.Router();
const  bookcontroller = require ('../app/controllers/bookcontroller');

router.get('/detail/:id', bookcontroller.detailesProduct);
router.post('/apptocart/:id', bookcontroller.appToCart);


module.exports = router;