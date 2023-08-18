import { Router } from "express";
import authRoutes from "./authRoutes.js";
import blogRoutes from "./blogsRoutes.js";
import tagRouter from "./tagsRoutes.js";
const routes = Router();

routes.use(authRoutes);
routes.use(blogRoutes);
routes.use(tagRouter);

export default routes;
