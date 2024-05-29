const { Quiz } = require('../models');

exports.createQuiz = async (req, res) => {
    try {
        const quiz = await Quiz.create(req.body);
        res.status(201).send(quiz);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getAllQuizzes = async (req, res) => {
    try {
        const quizzes = await Quiz.findAll();
        res.status(200).send(quizzes);
    } catch (error) {
        res.status(400).send(error);
    }
};
