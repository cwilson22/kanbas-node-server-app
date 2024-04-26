import * as dao from "./dao.js";

function QuizRoutes(app) {
  const createQuiz = async (req, res) => {
    const { cid } = req.params;
    const quiz = await dao.createQuiz({...req.body, course: cid});
    res.json(quiz);
  };

  const findAllQuizzesByCourse = async (req, res) => {
    const { cid } = req.params;
    const quizzes = await dao.findQuizzesByCourse(cid);
    res.json(quizzes);
  };

  const findQuizById = async (req, res) => {
    const { qid } = req.params;
    const quiz = await dao.findQuizById(qid);
    res.json(quiz);
  };

  const deleteQuiz = async (req, res) => {
    const { qid } = req.params;
    const status = await dao.deleteQuiz(qid);
    res.json(status);
  };

  const updateQuiz = async (req, res) => {
    const { qid } = req.params;
    const status = await dao.updateQuiz(qid, req.body);
    res.json(status);
  };

  const publishQuiz = async (req, res) => {
    const { qid } = req.params;
    const status = await dao.publishQuiz(qid);
    res.json(status);
  };

  const unpublishQuiz = async (req, res) => {
    const { qid } = req.params;
    const status = await dao.unpublishQuiz(qid);
    res.json(status);
  };

  app.put("/api/quizzes/:qid", updateQuiz);
  app.delete("/api/quizzes/:qid", deleteQuiz);
  app.post("/api/courses/:cid/quizzes", createQuiz);
  app.get("/api/courses/:cid/quizzes", findAllQuizzesByCourse);
  app.get("/api/quizzes/:qid", findQuizById);
  app.get("/api/quizzes/:qid/publish", publishQuiz);
  app.get("/api/quizzes/:qid/unpublish", unpublishQuiz);
}
export default QuizRoutes;