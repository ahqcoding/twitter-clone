const express = require("express");

const router = express.Router();
const userCtrl = require("../controllers/user.controller");
const authCtrl = require("../controllers/auth.controller");

router.route("/api/users").get(userCtrl.list).post(userCtrl.create);

router.route("/api/users/").delete(userCtrl.removeAll);

router
  .route("/api/users/follow")
  .put(authCtrl.authenticate, userCtrl.addFollowing, userCtrl.addFollower);

router
  .route("/api/users/unfollow")
  .put(
    authCtrl.authenticate,
    userCtrl.removeFollowing,
    userCtrl.removeFollower
  );

router
  .route("/api/users/:userId")
  .get(authCtrl.authenticate, userCtrl.read)
  .put(authCtrl.authenticate, authCtrl.hasAuthorization, userCtrl.update)
  .delete(authCtrl.authenticate, authCtrl.hasAuthorization, userCtrl.remove);

router.param("userId", userCtrl.userByID);
module.exports = router;
