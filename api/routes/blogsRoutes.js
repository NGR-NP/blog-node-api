import { Router } from "express";
import { createNewBlog, getAllBlogs } from "../controller/blogController.js";

const blogRoutes = Router();

// post methot to create new blog
blogRoutes.post("/create-blog", createNewBlog);
blogRoutes.get("/get-all-blogs", getAllBlogs)
export default blogRoutes;
