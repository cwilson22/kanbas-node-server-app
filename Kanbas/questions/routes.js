import * as dao from "./dao.js";

function QuestionRoutes(app) {
  const createQuestion = async (req, res) => {
    const { qid } = req.params;
    const question = await dao.createQuestion({...req.body, quiz: qid});
    res.json(question);
  };

  const findAllQuestionsByQuiz = async (req, res) => {
    const { qid } = req.params;
    const questions = await dao.findQuestionsByQuiz(qid);
    res.json(questions);
  };

  const findQuestionById = async (req, res) => {
    const { qnid } = req.params;
    const question = await dao.findQuestionById(qnid);
    res.json(question);
  };

  const deleteQuestion = async (req, res) => {
    const { qnid } = req.params;
    const status = await dao.deleteQuestion(qnid);
    res.json(status);
  };

  const updateQuestion = async (req, res) => {
    const { qnid } = req.params;
    const status = await dao.updateQuestion(qnid, req.body);
    res.json(status);
  };

  const updateQuestionMC = async (req, res) => {
    const { qnid } = req.params;
    const status = await dao.updateQuestionType(qnid, "Multiple Choice");
    res.json(status);
  };

  const updateQuestionTF = async (req, res) => {
    const { qnid } = req.params;
    const status = await dao.updateQuestionType(qnid, "True/False");
    res.json(status);
  };

  const updateQuestionFIB = async (req, res) => {
    const { qnid } = req.params;
    const status = await dao.updateQuestionType(qnid, "Fill-in-the-Blank");
    res.json(status);
  };

  const getQuizPoints = async (req, res) => {
    const { qid } = req.params;
    const pointsObj = await dao.findQuizPoints(qid);
    res.json(pointsObj);
  }

  app.put("/api/questions/:qnid", updateQuestion);
  app.delete("/api/questions/:qnid", deleteQuestion);
  app.post("/api/quizzes/:qid/questions", createQuestion);
  app.get("/api/quizzes/:qid/questions", findAllQuestionsByQuiz);
  app.get("/api/questions/:qnid", findQuestionById);
  app.get("/api/quizzes/:qid/points", getQuizPoints);
  app.get("/api/questions/:qnid/mc", updateQuestionMC);
  app.get("/api/questions/:qnid/tf", updateQuestionTF);
  app.get("/api/questions/:qnid/fib", updateQuestionFIB);
}
export default QuestionRoutes;