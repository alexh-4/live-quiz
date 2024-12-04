require("../mongodb_helper");
const Question = require("../../models/question");

describe("question model", () => {
    beforeEach(async() => {
        await Question.deleteMany({});
    });
    it("formats correctly as a schema", () => {
        const question = newQuestion({
            question_text: "Where banana?",
            correct_answer: "Check under couch.",
            incorrect_answers: ["Up sleeve?", "In pocket.", "Behind ear."],
            question_type: "Monkey",
            difficulty: 1
        });
        expect(question.question_text).toEqual("Where banana?");
        expect(question.correct_answer).toEqual("Check under couch.");
        expect(question.incorrect_answers).toEqual(["Up sleeve?", "In pocket.", "Behind ear."]);
        expect(question.question_type).toEqual("Monkey");
        expect(question.difficulty).toEqual(1);
    });
    it("can save a question", async() => {
        const question = newQuestion({
            question_text: "Where banana?",
            correct_answer: "Check under couch.",
            incorrect_answers: ["Up sleeve?", "In pocket.", "Behind ear."],
            question_type: "Monkey",
            difficulty: 1
        });
        await user.save();
        const questions = await Question.find();
        expect(questions[0].question_text).toEqual("Where banana?");
        expect(questions[0].correct_answer).toEqual("Check under couch.");
        expect(questions[0].incorrect_answers).toEqual(["Up sleeve?", "In pocket.", "Behind ear."]);
        expect(questions[0].question_type).toEqual("Monkey");
        expect(questions[0].difficulty).toEqual(1);
    })});