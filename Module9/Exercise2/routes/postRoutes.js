let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); // index.js
// Adds a GET route to return all Posts
router.get("/", (req, res) => {
  Controllers.postController.getPosts(res);
});
router.get("/:id", (req, res) => {
    Controllers.postController.getPostQuery(req, res);
  }
);
// Adds a POST route to create a new Post
router.post("/create", (req, res) => {
  Controllers.postController.createPost(req.body, res);
});
router.put("/:id", (req, res) => {
  Controllers.postController.updatePost(req, res);
});
router.delete("/:id", (req, res) => {
  Controllers.postController.deletePost(req, res);
});
module.exports = router;