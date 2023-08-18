import { Router } from "express";
import { createTag } from "../controller/tagController.js";

const tagRouter = Router();

tagRouter.post("/create-tag", createTag);

export default tagRouter;
