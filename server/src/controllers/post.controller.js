const Post = require("../models/post.model");
const _ = require("lodash");
const { getErrorMessage } = require("../helpers/dbErrorHandler");

const create = (req, res, next) => {
  console.log("test", req.body);
  let post = new Post(req.body);
  post.postedBy = req.profile;
  post.save((err, result) => {
    if (err) {
      return res.status(400).json({
        error: getErrorMessage(err),
      });
    }
    res.json(result);
  });
};

const read = (req, res, next) => {
  return res.json(req.post);
};

const postByID = (req, res, next, id) => {
  Post.findById(id)
    .populate("postedBy", "_id username")
    .exec((err, post) => {
      if (err || !post) {
        return res.status(400).json({
          error: "Post not found",
        });
      }
      req.post = post;
      next();
    });
};

const isAuthor = (req, res, next) => {
  let check =
    req.post &&
    req.user &&
    req.post.postedBy._id.toString() == req.user._id.toString();
  if (!check) {
    return res.status(403).json({
      error: "User is not authorized",
    });
  }
  next();
};

const listByUser = (req, res) => {
  Post.find({ postedBy: req.profile._id })
    .populate("comments", "text created")
    .populate("comments.postedBy", "_id username")
    .populate("postedBy", "_id username")
    .sort("-created")
    .exec((err, posts) => {
      if (err) {
        return res.status(400).json({
          error: getErrorMessage(err),
        });
      }
      res.json(posts);
    });
};

const listNewsFeed = (req, res) => {
  let following = req.user.following;
  following.push(req.user._id);
  Post.find({ postedBy: { $in: following } })
    .populate("comments", "text created")
    .populate("comments.postedBy", "_id username")
    .populate("postedBy", "_id username")
    .sort("-created")
    .exec((err, posts) => {
      if (err) {
        return res.status(400).json({
          error: getErrorMessage(err),
        });
      }
      res.json(posts);
    });
};

const remove = (req, res) => {
  let post = req.post;
  post.remove((err, deletedPost) => {
    if (err) {
      return res.status(400).json({
        error: getErrorMessage(err),
      });
    }
    res.json(deletedPost);
  });
};

const like = (req, res) => {
  Post.findByIdAndUpdate(
    req.body.postId,
    { $push: { likes: req.user._id } },
    { new: true }
  ).exec((err, result) => {
    if (err) {
      return res.status(400).json({
        error: getErrorMessage(err),
      });
    }
    console.log(result);
    res.json(result);
  });
};

const unlike = (req, res) => {
  console.log(req.body.postId);
  Post.findByIdAndUpdate(
    req.body.postId,
    { $pull: { likes: req.user._id } },
    { new: true }
  ).exec((err, result) => {
    if (err) {
      return res.status(400).json({
        error: getErrorMessage(err),
      });
    }
    res.json(result);
  });
};

const comment = (req, res) => {
  let comment = req.body.comment;
  comment.postedBy = req.user._id;
  Post.findByIdAndUpdate(
    req.body.postId,
    { $push: { comments: comment } },
    { new: true }
  )
    .populate("comments.postedBy", "_id username")
    .populate("postedBy", "_id username")

    .exec((err, result) => {
      if (err) {
        return res.status(400).json({
          error: getErrorMessage(err),
        });
      }
      res.json(result);
    });
};

const uncomment = (req, res) => {
  let comment = req.body.comment;
  Post.findByIdAndUpdate(
    req.body.postId,
    { $pull: { comments: { _id: comment._id } } },
    { new: true }
  )
    .populate("comments.postedBy", "_id username")
    .populate("postedBy", "_id username")

    .exec((err, result) => {
      if (err) {
        return res.status(400).json({
          error: getErrorMessage(err),
        });
      }
      res.json(result);
    });
};

module.exports = {
  create,
  listByUser,
  postByID,
  listNewsFeed,
  remove,
  like,
  unlike,
  comment,
  uncomment,
  isAuthor,
  read,
};
