import { Router } from "express";
import { login, register } from "../controller/authController.js";
const authRoutes = Router();

authRoutes.get("/login", login);
authRoutes.post("/register", register);

export default authRoutes;
