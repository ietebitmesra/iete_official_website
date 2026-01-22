import mongoose from "mongoose";

const connectDB = async () => {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.error("MONGO_URI is missing in env");
    process.exit(1);
  }
  try {
    await mongoose.connect(uri, {
      dbName: process.env.MONGO_DB || "iete",
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error", err.message);
    process.exit(1);
  }
};

export default connectDB;
