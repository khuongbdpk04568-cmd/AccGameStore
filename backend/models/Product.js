const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  game: {
    type: String,
    enum: ['Free Fire', 'Liên Quân', 'PUBG'],
    required: true
  },
  accountLevel: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    default: 'VND'
  },
  description: String,
  accountDetails: {
    username: String,
    password: String,
    extraInfo: String
  },
  available: {
    type: Boolean,
    default: true
  },
  image: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', productSchema);
