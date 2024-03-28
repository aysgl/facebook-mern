const { Schema, model } = require("mongoose");

const StorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      maxLength: [100, "Title must not exceed 100 characters"],
      minLength: [10, "Title must be at least 10 characters"],
    },
    story: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const StoryModel = model("Story", StorySchema);

module.exports = StoryModel;
