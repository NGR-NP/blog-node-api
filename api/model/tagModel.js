import mongoose from "mongoose";

const tagSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "tag name is required!!"],
  },
});

export default mongoose.model("tags", tagSchema);
