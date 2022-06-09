const mongoose = require("mongoose");

const Message = new mongoose.Schema({
  content: String,
  from: Object,
  socketid: String,
  time: String,
  date: String,
  to: String,
});

module.exports = mongoose.model("Message", Message);
