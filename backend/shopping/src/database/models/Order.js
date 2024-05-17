const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  orderId: String,
  customerId: String,
  amount: Number,
  status: String,
  txnId: String,
  items: [
    {
      product: {
        _id: { type: String, require: true },
        name: { type: String },
        description: { type: String },
        imageCover: { type: String },
        size: { type: String },
        color: { type: String },
        price: { type: Number },
        unit: { type: Number },
        brand: { type: String }
      }
    }
  ]
},
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.__v;
      }
    },
    timestamps: true
  });

module.exports = mongoose.model('order', OrderSchema);