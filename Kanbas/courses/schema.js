import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
    // id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    number: { type: String, required: true },
    startDate: Date,
    endDate: Date,
    image: {type: String}
  },
  { collection: "courses" });
export default courseSchema;