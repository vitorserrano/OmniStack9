const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  date: String,
  //Dessa forma, começa como nulo, caso seja necessário setar a aprovação como true ou false, basta colocar "approved: {type: Boolean, default: true}
  approved: Boolean,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  spot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Spot'
  }
});

module.exports = mongoose.model('Booking', BookingSchema);