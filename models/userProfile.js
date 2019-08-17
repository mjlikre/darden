const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserProfileSchema = new Schema({
  // id: {
  //   type: String,
  //   required: true,
  //   unique: true
  // },
  // firstname: {
  //   type: String
  // },
  // lastname:{
  //   type: String
  // },
  // phone:{
  //   type: String
  // },
  // usertype:{
  //   type: String
  //
  // },
  // place: {
  //   type: String
  // },
  // lat: {
  //   type: String
  // },
  // lng: {
  //   type: String
  // },
  // approved: {
  //   type: Boolean,
  //   default: false
  // },
  // agreement: {
  //   type: Boolean
  // },
  skills: {
    type: Array
  }
});

const UserProfile = mongoose.model('UserProfile', UserProfileSchema);

module.exports = UserProfile;