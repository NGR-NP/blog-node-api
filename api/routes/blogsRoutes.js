import { Router } from "express";
import { createNewBlog } from "../controller/blogController.js";

const blogRoutes = Router();

// post methot to create new blog
blogRoutes.post("/create-blog", createNewBlog);

export default blogRoutes;
