"use strict";
const Models = require("../models");
// finds all posts in DB, then sends array as response

const getLikes = (res) => {
    Models.Like.findAll({include: [{model: Models.User}, {model: Models.Post}]})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
    console.log(err);
    res.send({ result: 500, error: err.message });
    });
}

const getLikeQuery = (req, res) => {

    if(Object.keys(req.query).length == 0)
    {
      Models.Like.findAll({ where: { id: req.params.id }, include: [{model: Models.User}, {model: Models.Post}] })
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
const createLike = (data, res) => {
  Models.Like.create(data)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
}; 

// uses JSON from request body to update post ID from params
const updateLike = (req, res) => {
  Models.Like.update(req.body, {
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
const deleteLike = (req, res) => {
  Models.Like.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
    getLikes,
    getLikeQuery,
    createLike,
    updateLike,
    deleteLike,
};
