import { Router } from "express";
import auth from "../middleware/auth.js";
import { updateProfile } from "../controllers/usersController.js";

const router = Router();

router.put("/me", auth, updateProfile);

export default router;
