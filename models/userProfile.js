const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserProfileSchema = new Schema({
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
  status: {
    type: Number
  },
  skills: {
    type: Array
  },
  availability: {
    type: Number,
    default: 0
  },
  date: {
    type: String
  }

});

const UserProfile = mongoose.model('UserProfile', UserProfileSchema);

module.exports = UserProfile;