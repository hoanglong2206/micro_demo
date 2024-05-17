const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    username: String,
    email: String,
    password: String,
    birthday: String,
    gender: String,
    role: { type: String, enum: ["user","admin"], default: 'user' },
    salt: String,
    phone: String,
    cart: [
        {
            product:{
                _id: { type: String, require: true },
                name: { type: String },
                imageCover: { type: String },
                size: {type: String},
                color: {type: String},
                brand: { type: String },
                price: {type: Number }
            },
            unit: { type: Number, require: true }
        }
    ],
    wishlist:[
        { 
          _id: { type: String, require: true },
          name: { type: String },
          imageCover: { type: String },
          size: {type: String},
          color: {type: String},
          brand: { type: String },
          price: {type: Number }
        }
    ],
    orders: [ 
        {
            _id: { type: String, require: true },
            amount: { type: Number },
            date: { type: Date, default: Date.now() }
        }
    ]
},{
    toJSON: {
        transform(doc, ret){
            delete ret.password;
            delete ret.salt;
            delete ret.__v;
        }
    },
    timestamps: true
});

module.exports =  mongoose.model('customer', CustomerSchema);