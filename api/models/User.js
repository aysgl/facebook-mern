const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  username: { type: String, required: true, min: 4, unique: true },
  password: { type: String, required: true, min: 6 },
});

const UserModel = model("User", UserSchema);

module.exports = UserModel;
