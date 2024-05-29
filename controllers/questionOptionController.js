const { QuestionOption } = require('../models');

exports.createQuestionOption = async (req, res) => {
    try {
        const questionOption = await QuestionOption.create(req.body);
        res.status(201).send(questionOption);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getAllQuestionOptions = async (req, res) => {
    try {
        const questionOptions = await QuestionOption.findAll();
        res.status(200).send(questionOptions);
    } catch (error) {
        res.status(400).send(error);
    }
};
