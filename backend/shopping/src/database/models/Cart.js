const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CartSchema = new Schema({
  customerId: { type: String, required: true },

  items: [
    {
      product: {
        _id: { type: String, require: true },
        name: { type: String },
        imageCover: { type: String },
        size: { type: String },
        color: { type: String },
        price: { type: Number },
        unit: { type: Number },
        brand: { type: String }
      },
      unit: { type: Number, require: true },
    }
  ],
},
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.__v;
      }
    },
    timestamps: true
  });

module.exports = mongoose.model('cart', CartSchema);