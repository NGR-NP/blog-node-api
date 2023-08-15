import { Router } from "express";
import authRoutes from "./authRoutes.js";
const routes = Router();

routes.use(authRoutes);

export default routes;
