const { Question } = require('../models');

exports.createQuestion = async (req, res) => {
    try {
        const question = await Question.create(req.body);
        res.status(201).send(question);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getAllQuestions = async (req, res) => {
    try {
        const questions = await Question.findAll();
        res.status(200).send(questions);
    } catch (error) {
        res.status(400).send(error);
    }
};
