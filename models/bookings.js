const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookingsSchema = new Schema({
    user_id: {
        type: String,
        required: true,
        unique: true
    },
    service: {
        type: String
    },
    location:{
        type: Object
    },
    time:{
        type: String
    },
    hours:{
        type: Number

    },
    wage: {
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
    provider_id: {
        type: String
    },
    status: {
        default: 0
    }

});

const Bookings = mongoose.model('Bookings', BookingsSchema);

module.exports = Bookings;