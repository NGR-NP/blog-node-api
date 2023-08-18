import mongoose from "mongoose";
import { customError } from "../middleware/customErrorHandler.js";
import blogModel from "../model/blogModel.js";

// create blog
export const createNewBlog = async (req, res, next) => {
  const { title, description, author, image, tags } = req.body;

  if (!title || !description || !author) {
    return next(customError(400, "all feild are required!!"));
  }
  try {
    const newBlog = new blogModel({
      title,
      description,
      author,
      image,
      tags,
    });
    await newBlog.save();
    res.status(201).json({ message: "blog created successfully!!", newBlog });
  } catch (err) {
    next(err);
  }
};

// get all the blogs

export const getAllBlogs = async (_req, res, next) => {
  try {
    const allBlogs = await blogModel.find();
    const count = allBlogs?.length;
    if (count === 0)
      return next(customError(404, "no blogs available at the moment"));

    res.status(200).json({ count, allBlogs });
  } catch (err) {
    next(err);
  }
};
// get blog by id
export const getBlogById = async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return next(customError(400, "not a valid id!!!"));
  }

  try {
    const blog = await blogModel.findById(id).populate("tags");
    if (!blog) return next(customError(404, "blog not found"));

    res.status(200).json(blog);
  } catch (err) {
    next(err);
  }
};

// fing blog by id and update

export const updateBlogById = async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return next(customError(400, "not a valid id!!!"));
  }
  const { title, description, image } = req.body;

  try {
    const updateBlog = await blogModel.findById(id);

    if (!updateBlog) return next(customError(404, "blog not found in db"));

    if (title) {
      updateBlog.title = title;
    }
    if (description) {
      updateBlog.description = description;
    }
    if (image) {
      updateBlog.image = image;
    }
    const updatedBlog = await updateBlog.save();

    res
      .status(200)
      .json({ message: "blog update successfully!!", updatedBlog });
  } catch (err) {
    next(err);
  }
};

// delete blog

export const deleteBlogById = async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return next(customError(400, "not a valid id!!!"));
  }
  try {
    const deleteBlog = await blogModel.findByIdAndDelete(id);

    if (!deleteBlog) return next(customError(404, "blog not found"));

    res.status(200).json({ message: "blog deleted successfully" });
  } catch (err) {
    next(err);
  }
};
