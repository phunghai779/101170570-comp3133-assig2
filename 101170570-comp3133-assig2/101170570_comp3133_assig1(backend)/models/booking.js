const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  hotel_id: {
    type: Number,
    required: true,
  },
  booking_date: {
    type: String,
    required: true,
    
  },
  booking_start: {
    type: String,
    required: true,
    unique: true,
  },
  booking_end:{
    type: String,
    required: true,
  },
  user_id: {
      type: Number,
      required: true
  },
});

const booking = mongoose.model("booking", bookingSchema);
module.exports = booking;