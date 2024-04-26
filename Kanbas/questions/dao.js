import model from "./model.js";
export const createQuestion = (question) => {
    delete question._id
    return model.create(question);
};
export const findQuestionsByQuiz = (quizId) => model.find({ quiz : quizId});
export const updateQuestion = (questionId, question) =>  model.updateOne({ _id: questionId }, { $set: question });
export const updateQuestionType = (questionId, newType) => model.findOneAndUpdate({ _id: questionId }, { type: newType });
export const deleteQuestion = (questionId) => model.deleteOne({ _id: questionId });
export const findQuestionById = (questionId) => model.findById(questionId);
export const findQuizPoints = (quizId) => model.aggregate([
    { $match: { quiz: {$eq: quizId} } },
    { $group: { points: { $sum: "$points" } } }
])