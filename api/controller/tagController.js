import { customError } from "../middleware/customErrorHandler.js";
import tagModel from "../model/tagModel.js";

export const createTag = async (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return next(customError(400, "name is required!!!"));
  }

  try {
    const newTag = new tagModel({
      name: name,
    });
    const newTagCreated = await newTag.save();

    res
      .status(201)
      .json({ message: "new tag created successfully", newTagCreated });
  } catch (err) {
    next(err);
  }
};
