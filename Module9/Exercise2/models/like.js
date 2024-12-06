const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const likeSchema = new Schema({
  Comment: { type: String, trim: true, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true  },
  postId: { type: mongoose.Schema.Types.ObjectId, ref: 'posts', required: true  }
});
module.exports = mongoose.model("likes", likeSchema);