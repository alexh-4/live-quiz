const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  correct_answer: {type: String, required: true},
  incorrect_answers: [{answer: String}],
  question_text: {type: String, required: true},
  difficulty: {type: Number, required: true},
  question_type: {type: String, required: true}
});

const Question = mongoose.model("Question", QuestionSchema);

module.exports = Question;