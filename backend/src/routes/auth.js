import { Router } from "express";
import auth from "../middleware/auth.js";
import { login, register, me, googleLogin } from "../controllers/authController.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/google", googleLogin);
router.get("/me", auth, me);

export default router;
