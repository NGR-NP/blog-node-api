import blogModel from "../model/blogModel.js";

// create blog
export const createNewBlog = async (req, res) => {
  const { title, description, author, image } = req.body;

  if (!title || !description || !author) {
    return res
      .status(400)
      .json({ message: "title, description, author is required!!!" });
  }
  try {
    const newBlog = new blogModel({
      title,
      description,
      author,
      image,
    });
    await newBlog.save();
    res.status(201).json({ message: "blog created successfully!!", newBlog });
  } catch (err) {
    res.status(500).json({
      message: "something went wrong",
      error: err,
    });
  }
};
