import mongoose from "mongoose";

const userScheme = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "name is required!!!"],
  },
  email: {
    type: String,
    require: [true, "email is required!!!"],
  },
  password: {
    type: String,
    require: [true, "password is required!!!"],
  },
});

export default mongoose.model("Users", userScheme);
