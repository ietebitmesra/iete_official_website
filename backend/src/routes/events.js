import { Router } from "express";
import auth from "../middleware/auth.js";
import admin from "../middleware/admin.js";
import {
  getEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
} from "../controllers/eventsController.js";

const router = Router();

router.get("/", getEvents);
router.get("/:id", getEventById);
router.post("/", auth, admin, createEvent);
router.put("/:id", auth, admin, updateEvent);
router.delete("/:id", auth, admin, deleteEvent);

export default router;
