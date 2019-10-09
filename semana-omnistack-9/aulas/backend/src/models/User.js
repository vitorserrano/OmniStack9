const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  //Name: String, age: Number, active: boolean
  email: String,
});

module.exports = mongoose.model('User', UserSchema);