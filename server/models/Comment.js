const { Schema, model } = require("mongoose");

const commentSchema = new Schema(
  {
    commentText: {
      type: String,
      required: true,
      minLength: 4,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      ref: "User",
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Comment = model("Comment", commentSchema);

module.exports = Comment;
