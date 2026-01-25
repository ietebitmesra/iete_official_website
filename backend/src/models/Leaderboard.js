import mongoose from "mongoose";

const leaderboardSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String },
    metric: { type: String },
    points: { type: Number, default: 0 },
    period: { type: String },
  },
  { timestamps: true }
);

const Leaderboard = mongoose.model("Leaderboard", leaderboardSchema);
export default Leaderboard;
