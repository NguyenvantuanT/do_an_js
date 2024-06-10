
const Book = require('../models/Book');
const Cart = require('../models/Cart');
const { mongooseToObject } = require('../../util/mongoose');
// const { default: mongoose } = require('mongoose');
class bookcontroller {
    //GET/ book/:id
    detailesProduct(req, res, next) {
        Book.findOne({ _id: req.params.id })
            .then(book => {
                res.render('client/detailsProduct', { book: mongooseToObject(book) });
            })
            .catch(next);
    }

    async appToCart(req, res, nexr) {
        const productId = req.body.productId;
        const quantity = req.body.quantity || 1;

        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        let cart = await Cart.findOne({ sessionId: req.session.id });
        if (!cart) {
            cart = new Cart({ sessionId: req.session.id, items: [] });
        }

        const existingItem = cart.items.find(item => item.product.toString() === productId);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.items.push({ product: productId, quantity });
        }

        await cart.save();
        res.json(cart);
    }



}
module.exports = new bookcontroller();
