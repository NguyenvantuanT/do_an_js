
const Book = require('../models/Book');  // tuong tac models
const {mongooseToObject} = require('../../util/mongoose');
// const { default: mongoose } = require('mongoose');
class bookcontroller {
    //GET/ book/:slug
    detailesProduct(req, res, next){
        Book.findOne({slug: req.params.slug})
        .then(book => {
            res.render('client/detailsProduct',{book:mongooseToObject(book)}); 
        })  
        .catch(next);   
    }
}
module.exports = new bookcontroller();
