import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
    course: { type: String, required: true },
    published: Boolean,
    title: String,
    description: String,
    // lessons: [String],
    timeLimit: {type: Number, default: 20},
    points: Number,
    type: {
        type: String,
        enum: ["Graded Quiz", "Practice Quiz", "Graded Survey", "Ungraded Survey"],
        default: "Graded Quiz"},
    assignmentGroup: {
        type: String,
        enum: ["Quizzes", "Exams", "Assignments", "Project"],
        default: "Quizzes"},
    numQuestions: Number,
    avaliableStart: Date,
    avaliableUntil: Date,
    dueDate: Date,
    accessCode: {type: String, default: ""},
    webcam: {type: String, default: "No"},
    oneAtATime: {type: String, default: "Yes"},
    showCorrect: {type: String, default: "Immediately", enum: ["Immediately", "After submitting", "When released"]},
    lockQuestions: {type: String, default: "No"},
    multipleAttempts: {type: String, default: "No"},
    shuffle: {type: String, default: "Yes"},
    useTimeLimit: {type: String, default: "Yes"}
  },
  { collection: "quizzes" });
export default quizSchema;