import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL || "mongodb://localhost:27017/bmtc";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URL)
  } catch (error) {
    console.error(error);
  }
};
