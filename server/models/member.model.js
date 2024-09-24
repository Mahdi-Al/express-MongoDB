const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  name: String,
  gender: String,
  exp: Number,
  type: String,
});

const Member = mongoose.model("Member", memberSchema);

module.exports = Member;
