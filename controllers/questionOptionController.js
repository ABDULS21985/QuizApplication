const { QuestionOption } = require('../models');

exports.createQuestionOption = async (req, res, next) => {
    try {
        const questionOption = await QuestionOption.create(req.body);
        res.status(201).json(questionOption);
    } catch (error) {
        next(error);
    }
};

exports.getAllQuestionOptions = async (req, res, next) => {
    try {
        const questionOptions = await QuestionOption.findAll();
        res.status(200).json(questionOptions);
    } catch (error) {
        next(error);
    }
};

exports.updateQuestionOption = async (req, res, next) => {
    try {
        const [updated] = await QuestionOption.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedQuestionOption = await QuestionOption.findOne({ where: { id: req.params.id } });
            res.status(200).json(updatedQuestionOption);
        } else {
            throw new Error('QuestionOption not found');
        }
    } catch (error) {
        next(error);
    }
};

exports.deleteQuestionOption = async (req, res, next) => {
    try {
        const deleted = await QuestionOption.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            throw new Error('QuestionOption not found');
        }
    } catch (error) {
        next(error);
    }
};
