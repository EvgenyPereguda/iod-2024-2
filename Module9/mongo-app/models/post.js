const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postSchema = new Schema({
  Title: { type: String, trim: true, required: true },
  Description: { type: String, trim: true, required: true },
  Image: { type: String, trim: true, required: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true  }
});
module.exports = mongoose.model("post", postSchema);