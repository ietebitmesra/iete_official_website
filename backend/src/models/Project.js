import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    category: { type: String },
    techStack: [{ type: String }],
    year: { type: Number },
    status: { type: String, enum: ["draft", "pending", "approved", "rejected"], default: "pending" },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    repoUrl: { type: String },
    demoUrl: { type: String },
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);
export default Project;
