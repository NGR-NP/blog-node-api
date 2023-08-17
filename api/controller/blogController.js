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

// get all the blogs

export const getAllBlogs = async (_req, res) => {
  try {
    const allBlogs = await blogModel.find();
    const count = allBlogs?.length;
    if (count === 0) {
      res.status(204).json({ message: "no blogs available at the moment" });
    } else {
      res.status(200).json({ count, allBlogs });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
// get blog by id
export const getBlogById = async (req, res) => {
  const { id } = req.params;

  try {
    const blog = await blogModel.findById(id);
    if (!blog) return res.status(204).json({ message: "blog not found" });

    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({ message: "something went wrong", error: err });
  }
};

// fing blog by id and update

export const updateBlogById = async (req, res) => {
  const { id } = req.params;
  const { title, description, image } = req.body;

  try {
    const updateBlog = await blogModel.findById(id);

    if (!updateBlog) res.status(204).json({ message: "blog not found in db" });

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
    res.status(500).json({ error: err });
  }
};

// delete blog

export const deleteBlogById = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteBlog = await blogModel.findByIdAndDelete(id);

    if (!deleteBlog) return res.status(204).json({ message: "blog not found" });

    res.status(200).json({ message: "blog deleted successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
};
