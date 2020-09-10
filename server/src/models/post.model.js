const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  photo: {
    data: Buffer,
    contentType: String,
  },

  share: {
    type: mongoose.Schema.ObjectId,
    ref: "Post",
  },

  likes: [{ type: mongoose.Schema.ObjectId, ref: "User" }],
  comments: [
    {
      text: String,
      created: { type: Date, default: Date.now },
      postedBy: { type: mongoose.Schema.ObjectId, ref: "User" },
    },
  ],
  postedBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);
