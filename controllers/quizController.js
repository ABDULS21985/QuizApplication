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

exports.updateQuiz = async (req, res) => {
    try {
        const quiz = await Quiz.update(req.body, {
            where: { id: req.params.id }
        });
        res.status(200).send(quiz);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deleteQuiz = async (req, res) => {
    try {
        await Quiz.destroy({
            where: { id: req.params.id }
        });
        res.status(204).send();
    } catch (error) {
        res.status(400).send(error);
    }
};