import { Router } from "express";
import auth from "../middleware/auth.js";
import admin from "../middleware/admin.js";
import {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
  submitProjectForApproval,
  getUserProjects,
  approveProject,
} from "../controllers/projectsController.js";

const router = Router();

router.get("/", getProjects);
router.get("/mine", auth, getUserProjects);
router.get("/:id", getProjectById);
router.post("/", auth, createProject);
router.put("/:id", auth, updateProject);
router.delete("/:id", auth, admin, deleteProject);
router.post("/:id/submit", auth, submitProjectForApproval);
router.patch("/:id/approve", auth, admin, approveProject);

export default router;
