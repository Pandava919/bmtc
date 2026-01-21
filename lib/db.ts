import mongoose, { Schema } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL || "mongodb://localhost:27017/bmtc";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("MongoDB connected");
    return true;
  } catch (error) {
    console.error(error);
  }
};


const UserSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export const User = mongoose.models.User || mongoose.model("User", UserSchema);


const BusDataSchema = new Schema({
  busType: { type: String, required: true },
  tripDate: { type: String, required: true },
  startLocation: { type: String, required: true },
  destination: { type: String, required: true },
  noOfTrips: { type: Number, required: true },
  busNumber: { type: String, required: true },
  regestrationNumber: { type: String, required: true },
  timings: { type: [String] },
}, 
{
  versionKey: false,
  timestamps: true
})

export const BusInfo = mongoose.models.BusInfo || mongoose.model("BusInfo", BusDataSchema);