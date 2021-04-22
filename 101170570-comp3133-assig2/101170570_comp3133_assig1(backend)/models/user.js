const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  user_id: {
    type: Number,
    required: true,
  },
  user_name: {
    type: String,
    required: [true, 'Please enter user full name'],
    unique: [true, "Can't have duplicate name"],
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: [true, 'password must be provided'],
    trim: true,
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
});

const user = mongoose.model("user", userSchema);
module.exports = user;