import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    date: { type: Date },
    location: { type: String },
    category: { type: String },
    status: { type: String, enum: ["upcoming", "completed", "cancelled"], default: "upcoming" },
    coverImageUrl: { type: String },
  },
  { timestamps: true }
);

const Event = mongoose.model("Event", eventSchema);
export default Event;
