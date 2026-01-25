import { Router } from "express";
import auth from "../middleware/auth.js";
import admin from "../middleware/admin.js";
import {
  getResources,
  getResourceById,
  createResource,
  updateResource,
  deleteResource,
} from "../controllers/resourcesController.js";

const router = Router();

router.get("/", getResources);
router.get("/:id", getResourceById);
router.post("/", auth, admin, createResource);
router.put("/:id", auth, admin, updateResource);
router.delete("/:id", auth, admin, deleteResource);

export default router;
