const { Schema, model } = require("mongoose");

const PostSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    userName: { type: Schema.Types.ObjectId, ref: "User" },
    userImg: { type: Schema.Types.ObjectId, ref: "User" },
    description: {
      type: String,
      required: true,
      unique: true,
      maxLength: [100, "Title must not exceed 100 characters"],
      minLength: [10, "Title must be at least 10 characters"],
    },
    commented: {
      type: Number,
    },
    shared: {
      type: Number,
    },
    emotions: {
      type: String,
      enum: ["liked", "sadly", "angry", "haha", "lovely", "heart", "surprise"],
    },
    postImg: {
      type: String,
    },
  },
  { timestamps: true }
);

const PostModel = model("Post", PostSchema);

module.exports = PostModel;
