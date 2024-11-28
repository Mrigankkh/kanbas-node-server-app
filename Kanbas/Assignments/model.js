import { mongoose } from "mongoose";
import assignmentSchema from "./schema.js";
export default mongoose.model("Assignment", assignmentSchema);