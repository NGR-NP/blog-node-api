import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, "title is required!!"],
    minLength: 5,
    maxLength: 30,
  },
  description: {
    type: String,
    require: [true, "description is required!!"],
    maxLength: 250,
  },

  author: {
    type: String,
    require: [true, "author name is required!!"],
  },
  image: {
    type: String,
  },
});

export default mongoose.model("Blogs", blogSchema);
