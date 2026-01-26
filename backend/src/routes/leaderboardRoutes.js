import { Router } from "express";
import {
  getLeaderboard,
  updateLeaderboardScores,
} from "../controllers/leaderboardController.js";

const router = Router();

router.get("/", getLeaderboard);
router.post("/update", updateLeaderboardScores);

export default router;
