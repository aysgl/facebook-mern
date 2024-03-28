const { Schema, model } = require("mongoose");

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      maxLength: [100, "Title must not exceed 100 characters"],
      minLength: [10, "Title must be at least 10 characters"],
    },
    summary: {
      type: String,
      required: true,
      maxLength: [100, "Summary must not exceed 100 characters"],
      minLength: [10, "Summary must be at least 10 characters"],
    },
    description: {
      type: String,
      required: true,
      maxLength: [1000, "Description must not exceed 1000 characters"],
      minLength: [100, "Description must be at least 100 characters"],
    },
    cover: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const PostModel = model("Post", PostSchema);

module.exports = PostModel;
