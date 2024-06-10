
const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
  items: [
    {
      bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
      name: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
      productImage: { type: String }
    }
  ],
  totalPrice: { type: Number, default: 0 }
});

module.exports = mongoose.model('Cart', CartSchema);
