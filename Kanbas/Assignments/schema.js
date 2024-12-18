import mongoose from "mongoose";
const assingmentSchema = new mongoose.Schema({
  title: String,
  course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
  points: Number,
  description: String,
  dueDate: Date,
  availableFrom: Date,
  avaiilableUntil: Date,
});

export default assingmentSchema;
