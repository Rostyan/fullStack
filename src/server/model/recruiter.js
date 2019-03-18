const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const recruiter = new Schema({

  email: {
    type: String,
    required: [true, "email can't be an empty field"],
    lowercase: true,
    trim: true,
    unique : [true, "email is already used in system!"]
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "password is too short!"],
    maxlength: [50, "password is too long!"]
  },
  secondEmail: {
    type: String,
    required: [true, "email can't be an empty field"],
    lowercase: true,
    trim: true,
    unique : [true, "email is already used in system!"]
  },
  name: {
    type: String,
    required: [true, "email can't be an empty field"],
    trim: true,
    maxlength: [50,"name is too long"]
  },
  role: {
    type: String,
    required: [true, "can't be an empty field"],
    default: 'recruiter'
  }
},{collection: "admins"});

recruiter.path("email").validate((value) =>{
  value = value.trim();
  return value.match(/\S+@\S+\.\S+/);
}, "Incorrect email address");

recruiter.path("secondEmail").validate((value) =>{
  value = value.trim();
  return value.match(/\S+@\S+\.\S+/);
}, "Incorrect email address");

recruiter.pre('findOneAndUpdate', function(next) {
  this.options.runValidators = true;
  next();
});

module.exports = mongoose.model("recruiter",recruiter);