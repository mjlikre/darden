const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const approvedUserProfileSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String
    },
    firstname: {
        type: String
    },
    lastname:{
        type: String
    },
    phone:{
        type: String
    },
    address: {
        type: String
    },
    lat: {
        type: String
    },
    lng: {
        type: String
    },
    skills: {
        type: Array
    },
    availability: {
        type: Number,
        default: 0
    },


});

const approvedUserProfile = mongoose.model('approvedUserProfile', approvedUserProfileSchema);

module.exports = approvedUserProfile;