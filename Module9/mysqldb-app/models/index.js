"use strict";
const User = require("./user"); //require the model
const Post = require("./post")
const Like = require("./like")
async function init() {
  await User.sync(); // sync the model
  await Post.sync();
  await Like.sync();
  // also sync any extra models here
}
init();

Post.belongsTo(User);
Post.hasMany(Like);

User.hasMany(Post);
User.hasMany(Like);


Like.belongsTo(User);
Like.belongsTo(Post);


module.exports = {
  User, // export the model
  Post,
  Like
  // also export any extra models here
};
