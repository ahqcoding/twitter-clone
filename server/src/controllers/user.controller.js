const _ = require("lodash");
const User = require("../models/user.model");
const { getErrorMessage } = require("../helpers/dbErrorHandler");

const create = (req, res, next) => {
  const user = new User(req.body);
  console.log(req.body);
  user.save((err, result) => {
    if (err) {
      return res.status(400).json({
        error: getErrorMessage(err),
      });
    }

    res.status(200).json({
      message: "Successfully signed up!",
    });
  });
};

const list = (req, res, next) => {
  User.find((err, users) => {
    if (err) {
      return res.status(400).json({
        error: getErrorMessage(err),
      });
    }
    res.json(users);
  }).select("username email updated created");
};

const userByID = (req, res, next, id) => {
  User.findById(id)
    .populate("following", "_id username")
    .populate("followers", "_id name")
    .exec((err, user) => {
      if (err || !user)
        return res.status(400).json({
          error: "User not found",
        });
      req.profile = user;

      next();
    });
};

const read = (req, res) => {
  req.profile.password = undefined;
  return res.json(req.profile);
};

const update = (req, res, next) => {
  let user = req.profile;
  let body = req.body;
  user = _.extend(user, body);
  user.save((err, result) => {
    if (err) {
      return res.status(400).json({
        error: getErrorMessage(err),
      });
    }
    user.password = undefined;
    res.json(user);
  });
};

const remove = (req, res, next) => {
  let user = req.user;
  user.remove((err, deletedUser) => {
    if (err) {
      return res.status(400).json({
        error: getErrorMessage(err),
      });
    }
    deletedUser.password = undefined;
    res.json(deletedUser);
  });
};

const removeAll = (req, res) => {
  User.remove({}, (err, result) => {
    if (err) {
      return res.status(400).json({
        error: getErrorMessage(err),
      });
    }
    res.json(result);
  });
};

const addFollowing = (req, res, next) => {
  User.findByIdAndUpdate(
    req.user._id,
    { $push: { following: req.body.followId } },
    (err, result) => {
      if (err) {
        return res.status(400).json({
          error: getErrorMessage(err),
        });
      }
      next();
    }
  );
};

const addFollower = (req, res) => {
  User.findByIdAndUpdate(
    req.body.followId,
    {
      $push: { followers: req.user._id },
    },
    { new: true }
  )
    .populate("following", "_id username")
    .populate("followers", "_id username")
    .exec((err, result) => {
      if (err) {
        return res.status(400).json({
          error: getErrorMessage(err),
        });
      }
      result.password = undefined;
      res.json(result);
    });
};

const removeFollowing = (req, res, next) => {
  User.findByIdAndUpdate(
    req.user._id,
    { $pull: { following: req.body.unfollowId } },
    (err, result) => {
      if (err) {
        return res.status(400).json({
          error: getErrorMessage(err),
        });
      }

      next();
    }
  );
};

const removeFollower = (req, res) => {
  User.findByIdAndUpdate(
    req.body.unfollowId,
    { $pull: { followers: req.user._id } },
    { new: true }
  )
    .populate("following", "_id username")
    .populate("followers", "_id username")
    .exec((err, result) => {
      if (err) {
        return res.status(400).json({
          error: getErrorMessage(err),
        });
      }
      result.password = undefined;
      res.json(result);
    });
};

// const findPeople = (req, res) => {
//   let following = req.profile.following;
//   following.push(req.profile._id);
//   user
//     .find({ _id: { $nin: following } }, (err, users) => {
//       if (err) {
//         return res.status(400).json({
//           error: getErrorMessage(err),
//         });
//       }
//       res.json(users);
//     })
//     .select("username");
// };

module.exports = {
  create,
  list,
  remove,
  userByID,
  read,
  update,
  addFollower,
  addFollowing,
  removeFollower,
  removeFollowing,
  removeAll,
};
