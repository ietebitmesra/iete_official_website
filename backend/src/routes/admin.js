import { Router } from "express";
import auth from "../middleware/auth.js";
import admin from "../middleware/admin.js";
import { approveProject, rejectProject } from "../controllers/adminController.js";

const router = Router();

router.post("/projects/:id/approve", auth, admin, approveProject);
router.post("/projects/:id/reject", auth, admin, rejectProject);

export default router;
