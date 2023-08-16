import { Router } from "express";
import authRoutes from "./authRoutes.js";
import blogRoutes from "./blogsRoutes.js";
const routes = Router();

routes.use(authRoutes);
routes.use(blogRoutes)

export default routes;
