import mongoose from "mongoose";

const resourceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    type: { type: String },
    category: { type: String },
    tags: [{ type: String }],
    link: { type: String },
    description: { type: String },
  },
  { timestamps: true }
);

const Resource = mongoose.model("Resource", resourceSchema);
export default Resource;
