import { Router } from "express";
import auth from "../middleware/auth.js";
import { login, register, getMe } from "../controllers/authController.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", auth, getMe);

export default router;
