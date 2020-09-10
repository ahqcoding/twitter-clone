const express = require("express");
const userCtrl = require("../controllers/user.controller");
const authCtrl = require("../controllers/auth.controller");
const postCtrl = require("../controllers/post.controller");
const authController = require("../controllers/auth.controller");

const router = express.Router();

router
  .route("/api/posts/feed/")
  .get(authCtrl.authenticate, postCtrl.listNewsFeed);

router
  .route("/api/posts/new/:userId")
  .post(authCtrl.authenticate, authCtrl.hasAuthorization, postCtrl.create);

router
  .route("/api/posts/:postId")
  .delete(authCtrl.authenticate, postCtrl.isAuthor, postCtrl.remove)
  .get(authCtrl.authenticate, postCtrl.read);

router.route("/api/posts/like").put(authCtrl.authenticate, postCtrl.like);
router.route("/api/posts/unlike").put(authCtrl.authenticate, postCtrl.unlike);
router.route("/api/posts/comment").put(authCtrl.authenticate, postCtrl.comment);
router
  .route("/api/posts/uncomment")
  .put(authCtrl.authenticate, postCtrl.uncomment);

router.param("userId", userCtrl.userByID);
router.param("postId", postCtrl.postByID);
module.exports = router;
