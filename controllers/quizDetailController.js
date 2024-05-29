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

exports.updateQuizDetail = async (req, res) => {
    try {
        const quizDetail = await QuizDetail.update(req.body, {
            where: { id: req.params.id }
        });
        res.status(200).send(quizDetail);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deleteQuizDetail = async (req, res) => {
    try {
        await QuizDetail.destroy({
            where: { id: req.params.id }
        });
        res.status(204).send();
    } catch (error) {
        res.status(400).send(error);
    }
};
