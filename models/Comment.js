const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  song: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true
  },
  date: Date
});

const Comments = mongoose.model("Comments", CommentSchema);

module.exports = Comments