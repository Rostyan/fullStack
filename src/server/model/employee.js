const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employee = new Schema({

  name: {
    type: String,
    required: [true, "name can't be an empty field"],
    trim: true
  },

  lastName: {
    type: String,
    required: [true, "lastname can't be an empty field"],
    trim: true
  },

  expirienceFrom: {
    type: String,
    trim: true
  },

  expirienceTo: {
    type: String,
    trim: true
  },

  devType: {
    type: String,
    trim: true,
    required: [true, "skills can't be an empty field"]
  },

  location: {
    type: String,
    trim: true,
    required: [true, "location can't be an empty field"]
  },

  workType: {
    type: String,
    enum: ['office', 'remote'],
    required: [true, "work type can't be an empty field"]
  },

  workTime: {
    type: String,
    enum: ['fullTime', 'partTime'],
    required: [true, "work time can't be an empty field"]
  },

  email: {
    type: String,
    required: [true, "email can't be an empty field"],
    lowercase: true,
    trim: true,
    unique : [true, "email is already used in system!"]
  },

  lastPosition: {
    type: String,
    trim: true
  },

  commentAboutPerson: {
    type: String,
    trim: true
  },

  commentAboutComunication: {
    type: String,
    trim: true
  },
  
  facebook: {
    type: String,
    trim: true
  },

  twitter: {
    type: String,
    trim: true
  },

  linkedin: {
    type: String,
    trim: true
  } 

});

module.exports = mongoose.model('employee', employee);