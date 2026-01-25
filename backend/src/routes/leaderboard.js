import { Router } from "express";
import auth from "../middleware/auth.js";
import admin from "../middleware/admin.js";
import {
  getLeaderboard,
  updateLeaderboard,
} from "../controllers/leaderboardController.js";

const router = Router();

router.get("/", getLeaderboard);
router.put("/", auth, admin, updateLeaderboard);

export default router;
