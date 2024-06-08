const express  = require('express');
const router = express.Router();
const  bookcontroller = require ('../app/controllers/bookcontroller');

router.get('/:slug', bookcontroller.detailesProduct);

module.exports = router;