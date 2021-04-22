const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  hotel_id: {
    type: Number,
    required: true,
  },
  hotel_name: {
    type: String,
    required: [true, 'hotel name must be provided'],
    trim: true,
    lowercase: true
  },
  street: {
    type: String,
    required: true,
    unique: [true, 'street name must be provided'],
    trim: true,
    lowercase: true,
  },
  city:{
    type: String,
    required: [true, 'city name must be provided'],
    trim: true,
    lowercase: true
  },
  postal_code:{
    type: String,
    required: [true, 'postal code must be provided'],
    trim: true,
    lowercase: true
  },
  price: {
    type: Number,
    required: true,
    default: 0.0,
    validate(value) {
      if (value < 0.0){
         throw new Error("Negative Price is impossible.");
      }
    }
  },
  email: {
    type: String,
    required: [true, "email must be provided"],
    unique: [true, "Can't have duplicate email"],
    trim: true,
    uppercase: true,
    validate: function(value) {
      var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      return emailRegex.test(value);
    }
  },
  user_id: {
      type: Number,
      required: true
  },
});

const hotel = mongoose.model("hotel", hotelSchema);
module.exports = hotel;