import { Router } from "express";
import {
  createNewBlog,
  deleteBlogById,
  getAllBlogs,
  getBlogById,
  updateBlogById,
} from "../controller/blogController.js";

const blogRoutes = Router();

blogRoutes.post("/create-blog", createNewBlog);
blogRoutes.get("/get-all-blogs", getAllBlogs);
blogRoutes.get("/get-blog/:id", getBlogById);
blogRoutes.patch("/update-blog/:id", updateBlogById);
blogRoutes.delete("/delete-blog/:id", deleteBlogById);

export default blogRoutes;
