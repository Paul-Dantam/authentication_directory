const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const robotSchema = new Schema({
  id: {
    type: Number
  },
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    default:
      "https://robohash.org/blanditiisexercitationemquaerat.png?size=150x150&set=set1"
  },
  university: String,
  job: String,
  company: String,
  skills: [],
  phone: Number,
  address: {
    city: String,
    country: String
  }
});

module.exports = mongoose.model("Robot", robotSchema);
