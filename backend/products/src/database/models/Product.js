const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: String,
    description: String,
    imageCover: String,
    size: [
      {
        name: String,
        color: [
          {
            name: String,
            code: String,
            quantity: Number
          }
        ]
      }
    ],
    category: String,
    brand: String,
    inStock: Boolean,
    unit: Number,
    price: Number,
});

module.exports =  mongoose.model('product', ProductSchema);