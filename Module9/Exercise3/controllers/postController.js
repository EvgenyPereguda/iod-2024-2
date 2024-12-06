"use strict";
const Models = require("../models");
// finds all posts in DB, then sends array as response

const getPosts = (res) => {
    Models.Post.findAll({include: Models.User})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
    console.log(err);
    res.send({ result: 500, error: err.message });
    });
}

const getPostQuery = (req, res) => {

    if(Object.keys(req.query).length == 0)
    {
      Models.Post.findAll({ where: { id: req.params.id } , include: Models.Like})
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
          console.log(err);
          res.send({ result: 500, error: err.message });
        });
    } 
    else if (req.query.hasOwnProperty("likes")) {

        // finds all posts for a given user and includes matching user details
        Models.Like.findAll({ where: { postId: req.params.id }, include: Models.User})
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
        });
    }
    else{
        res.send({ result: 400, error: `Unknown query: ${req.query}` });

        Models.Post.get
    }


};

// uses JSON from request body to create new post in DB
const createPost = (data, res) => {

  console.log(data);

  Models.Post.create(data)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
}; 

// uses JSON from request body to update post ID from params
const updatePost = (req, res) => {
  Models.Post.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// deletes post matching ID from params
const deletePost = (req, res) => {
  Models.Post.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
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
