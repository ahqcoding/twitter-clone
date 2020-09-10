const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "DON'TTELLANYONE";
const signin = (req, res) => {
  User.findOne(
    {
      email: req.body.email,
    },
    (err, user) => {
      if (err || !user) {
        return res.status(401).json({
          error: "User not found",
        });
      }
      user.comparePassword(req.body.password, (err, isMatch) => {
        if (err || !isMatch)
          res.status(401).json({
            error: "Email and password don't match",
          });
        const token = jwt.sign(
          {
            _id: user._id,
          },
          JWT_SECRET
        );
        res.cookie("t", token, {
          expire: new Date() + 9999,
        });
        return res.json({
          token,
          user: { _id: user._id, username: user.username, email: user.email },
        });
      });
    }
  );
};

const authenticate = (req, res, next) => {
  console.log(req.body);
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).json({
          error: "Authentication failed",
        });
      }
      User.findById(decoded._id, (err, user) => {
        if (err) {
          return res.status(403).json({
            error: "User not found",
          });
        }
        req.user = user;
        next();
      });
    });
  } else {
    return res.status(401).json({
      error: "Token required",
    });
  }
};

const hasAuthorization = (req, res, next) => {
  const authorized = req.profile;

  if (!authorized) {
    return res.status(403).json({
      error: "User is not authorized",
    });
  }
  next();
};

const signout = (req, res) => {
  res.clearCookie("t");
  return res.status("200").json({
    message: "signed out",
  });
};

module.exports = {
  signin,
  signout,
  authenticate,
  hasAuthorization,
};
