"use strict";
let Models = require("../models"); // matches index.js
const getPosts = (res) => {
  // finds all Posts
  Models.Post.find({}).populate({path: 'userId'})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const getPostQuery = (req, res) => {

    if (req.query.hasOwnProperty("likes")) {
        // finds all posts for a given user and populates with user details
        Models.Like.find({postId: req.params.id}).populate({path: 'userId'})
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
        });
  
    } else {
      res.send({ result: 400, error: `Unknown query: ${req.query}` });
    }
  };

const createPost = (data, res) => {
  // creates a new Post using JSON data POSTed in request body
  console.log(data);
  new Models.Post(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
const updatePost = (req, res) => {
  // updates the Post matching the ID from the param using    JSON data POSTed in request body
  console.log(req.body);
  Models.Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
const deletePost = (req, res) => {
  // deletes the Post matching the ID from the param
  Models.Post.findByIdAndDelete(req.params.id)
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getPosts,
  getPostQuery,
  createPost,
  updatePost,
  deletePost,
};