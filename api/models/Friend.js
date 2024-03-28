const { Schema, model } = require("mongoose");

const FriendSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
      unique: true,
      maxLength: [100, "Title must not exceed 100 characters"],
      minLength: [10, "Title must be at least 10 characters"],
    },
    img: {
      type: String,
      required: true,
      maxLength: [100, "Summary must not exceed 100 characters"],
      minLength: [10, "Summary must be at least 10 characters"],
    },
  },
  { timestamps: true }
);

const FriendModel = model("Friend", FriendSchema);

module.exports = FriendModel;
