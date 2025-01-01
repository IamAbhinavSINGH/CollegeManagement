const mongoose = require("mongoose");

const studentDetails = new mongoose.Schema({
  enrollmentNo: {
    type: Number,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: false,
  },
  semester: {
    type: Number,
    required: false,
  },
  branch: {
    type: String,
    required: false,
  },
  gender: {
    type: String,
    required: false,
  },
  profile: {
    type: String,
    required: false,
  }
}, { timestamps: true });

module.exports = mongoose.model("Student Detail", studentDetails);
