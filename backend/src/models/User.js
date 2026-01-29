import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    passwordHash: { type: String },
    role: { type: String, default: "user" },
    profileSetup: { type: Boolean, default: false },
    googleId: { type: String },
    avatar: { type: String },
    githubContributions: { type: Number, default: 0 },
    codeforcesRating: { type: Number, default: 0 },
    projectsCount: { type: Number, default: 0 },
    leaderboardScore: { type: Number, default: 0 },
    bio: { type: String },
    branch: { type: String },
    batchYear: { type: Number },
    portfolioUrl: { type: String },
    githubUsername: { type: String },
    linkedinUrl: { type: String },
    leetCodeUsername: { type: String },
    codeforcesHandle: { type: String },
    skills: [{ type: String }],
    leetCodeSolved: { type: Number, default: 0 },
    leetCodeContestRating: { type: Number, default: 0 },
    codeforcesRating: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
