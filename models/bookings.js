const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const BookingsSchema = new Schema({
    clientId: {
        type: String,
        required: true,
        unique: true
    },
    service: {
        type: String
    },
    place:{
        type: Object
    },
    date:{
        type: String
    },
    hour:{
        type: Number
    },
    price: {
        type: Number
    },
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    providerId: {
        type: String
    },
    confirm: {
        type: Number
    },
    darden: {
        type: Number
    },
    tax: {
        type: Number
    },
    total: {
        type: Number
    },
    description: {
        type: String
    }


});

const Bookings = mongoose.model('Bookings', BookingsSchema);

module.exports = Bookings;