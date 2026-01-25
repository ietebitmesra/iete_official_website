import { Router } from "express";
import auth from "../middleware/auth.js";
import admin from "../middleware/admin.js";
import {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/blogController.js";

const router = Router();

router.get("/", getPosts);
router.get("/:id", getPostById);
router.post("/", auth, admin, createPost);
router.put("/:id", auth, admin, updatePost);
router.delete("/:id", auth, admin, deletePost);

export default router;
