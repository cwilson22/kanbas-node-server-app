import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    quiz: {type: String, required: true},
    type: {type: String, default: "Multiple Choice", enum: ["Multiple Choice", "True/False", "Fill-in-the-Blank"]},
    correctAnswers: {type: [String], default: [""]},
    wrongAnswers: {type: [String], default: [""]},
    question: {type: String, required: true},
    points: {type: Number, default: 1}
},
{ collection: "questions" });

export default questionSchema;