const Question = require("../models/Question");
const Session = require("../models/Session");

// @desc   Add additional Question to an existing session
// @route  POST /api/questions/add
// @access Private

exports.addQuestionsToSession = async (req, res) => {
  try {
    const { sessionId, questions } = req.body;
    if (!sessionId || !questions || !Array.isArray(questions)) {
      return res.status(400).json({ message: "Invalid Input Data" });
    }
    const session = await Session.findById(sessionId);
    if (!session) {
      return res.status(404).json({ message: "Session not Found" });
    }
    // Create new Questions
    const createdQuestion = await Question.insertMany(
      questions.map((q) => ({
        session: sessionId,
        question: q.question,
        answer: q.answer,
      }))
    );
    // Update session to include new question IDs
    session.questions.push(...createdQuestion.map((q) => q._id));
    await session.save();

    res.status(201).json(createdQuestion);
  } catch (error) {}
};

// @desc  Pin or unpin a question
// @route POST /api/questions/:id/pin
//@access Private

exports.togglePinQuestions = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (!question) {
      return res
        .status(404)
        .json({ success: false, message: "Question Not Found" });
    }
    question.isPinned = !question.isPinned;
    await question.save();
    res.status(200).json({ success: true, question });
  } catch (error) {}
};

//@desc   Update a note for a question
//@route  POST /api/questions/:id/note
//@access Private

exports.updateQuestionNote = async (req, res) => {
  try {
    const { note } = req.body;
    const question = await Question.findById(req.params.id);
    if (!question) {
      return res.status(404).json({ message: "Question Not Found" });
    }
    question.note = note || "";
    await question.save();
    res.status(200).json({ success: true, question });
  } catch (error) {}
};
