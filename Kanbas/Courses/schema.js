import mongoose from "mongoose";
const courseSchema = new mongoose.Schema(
 {
  name: String,
  number: String,
  credits: { type: Number, default: 4 },
  description: String,
 },
 { collection: "courses" }
);
export default courseSchema;