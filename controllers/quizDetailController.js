const { QuizDetail } = require('../models');

exports.createQuizDetail = async (req, res) => {
    try {
        const quizDetail = await QuizDetail.create(req.body);
        res.status(201).send(quizDetail);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getAllQuizDetails = async (req, res) => {
    try {
        const quizDetails = await QuizDetail.findAll();
        res.status(200).send(quizDetails);
    } catch (error) {
        res.status(400).send(error);
    }
};
