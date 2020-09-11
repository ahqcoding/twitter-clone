const express = require("express");

const router = express.Router();

const authCtrl = require("../controllers/auth.controller");
router.route("/api/auth/signin").post(authCtrl.signin);
router.route("/api/auth/signout").get(authCtrl.signout);

module.exports = router;
