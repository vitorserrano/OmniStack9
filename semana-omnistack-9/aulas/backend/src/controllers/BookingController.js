const Booking = require('../models/Booking');

module.exports = {
  async store(req, res) {
    const { user_id } = req.headers;
    //é o parametros que vem de dentro do routes.js
    const { spot_id } = req.params;
    const { date } = req.body;

    const booking = await Booking.create({
      user: user_id,
      spot: spot_id,
      date,
    });

    await booking.populate('spot').populate('user').execPopulate();

    return res.json(booking);
  }
};