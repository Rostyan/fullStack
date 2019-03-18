const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const invitation = new Schema({
  email: {
    type: String,
    required: [true, "email can't be an empty field"],
    lowercase: true,
    trim: true,
    unique : [true, "email is already used in system!"]
  },
  invitationToken: {
    type:String,
    required: [true,"can't be empty field"],
  } ,
  invitationExpires: {
    type: Date,
    required: [true,"can't be empty field"],
  } ,
  role: {
    type:String,
    required: [true,"can't be empty field"],
    enum: ["admin","recruiter"]}
},{collection: 'invitations'});

invitation.path("email").validate((value) =>{
  value = value.trim();
  return value.match(/\S+@\S+\.\S+/);
}, "Incorrect email address");

module.exports = mongoose.model("invitation",invitation);