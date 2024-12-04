const mongoose = require("mongoose");

const QuestionSetSchema = new mongoose.Schema({
    question_set: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Question"}]
});

const QuestionSet = mongoose.model("QuestionSet", QuestionSetSchema);

module.exports = QuestionSet;