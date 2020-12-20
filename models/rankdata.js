const mongoose = require("mongoose");

const rankdataSchema = new mongoose.Schema({
  nickname: String,
  stage: String,
  time: String
});

const model = mongoose.model("rankdata", rankdataSchema);

exports.rankdata = model;
