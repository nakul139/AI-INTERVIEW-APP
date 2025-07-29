const { GoogleGenAI } = require("@google/genai");
const {
  conceptExplainPrompt,
  questionAnswerPrompt,
} = require("../utils/prompts");

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// @desc   Genrate Interview questions and answers using Gemini
// @route  POST /api/ai/generate-questions
// @access Private

const generateInterviewQuestions = async (req, res) => {
  try {
    const { role, experience, topicsToFocus, numberOfQuestions } = req.body;
    if (!role || !experience || !topicsToFocus || !numberOfQuestions) {
      return res.status(400).json({ message: "Missing fields are required." });
    }
    const prompt = questionAnswerPrompt(
      role,
      experience,
      topicsToFocus,
      numberOfQuestions
    );
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-lite",
      contents: prompt,
    });
    let rawText = response.text;

    // Clean it : Remove ``` Json and ``` from beginning
    const cleanedText = rawText
      .replace(/^```json\s*/, "") // Remove startig ```json
      .replace(/```$/, "") // Remove ending ```
      .trim(); // remove any extra spaces

    // Now safe to parse
    const data = JSON.parse(cleanedText);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: "Failed to genrate Question",
      error: error.message,
    });
  }
};

// @desc   Generate explains a interview question
// @route  POST /api/ai/generate-explaination
// @access Private

const generateConceptExplanation = async (req, res) => {
  try {
    const { question } = req.body;
    if (!question) {
      return res.status(400).json({ message: "Question is required." });
    }
    const prompt = conceptExplainPrompt(question);
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-lite",
      contents: prompt,
    });
    let rawText = response.text;
    // Clean it : Remove ``` Json and ``` from beginning
    // Clean it : Remove ``` Json and ``` from beginning
    const cleanedText = rawText
      .replace(/^```json\s*/, "") // Remove startig ```json
      .replace(/```$/, "") // Remove ending ```
      .trim(); // remove any extra spaces

    // Now safe to parse
    const data = JSON.parse(cleanedText);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: "Failed to genrate Explaination",
      error: error.message,
    });
  }
  // Clean it : Remove ``` Json and ``` from beginning
};

module.exports = { generateInterviewQuestions, generateConceptExplanation };
