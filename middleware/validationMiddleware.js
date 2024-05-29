const { body, validationResult } = require('express-validator');

const validateBuilding = [
    body('name').notEmpty().withMessage('Name is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('createdBy').notEmpty().withMessage('CreatedBy is required'),
    body('status').notEmpty().withMessage('Status is required'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

const validateQuestion = [
    body('text').notEmpty().withMessage('Text is required'),
    body('createdBy').notEmpty().withMessage('CreatedBy is required'),
    body('status').notEmpty().withMessage('Status is required'),
    body('title').notEmpty().withMessage('Title is required'),
    body('buildingId').isInt().withMessage('BuildingId must be an integer'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

const validateQuestionOption = [
    body('text').notEmpty().withMessage('Text is required'),
    body('isCorrect').isBoolean().withMessage('IsCorrect must be a boolean'),
    body('score').isInt().withMessage('Score must be an integer'),
    body('questionId').isInt().withMessage('QuestionId must be an integer'),
    body('createdBy').notEmpty().withMessage('CreatedBy is required'),
    body('status').notEmpty().withMessage('Status is required'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

const validateQuiz = [
    body('inference').notEmpty().withMessage('Inference is required'),
    body('username').notEmpty().withMessage('Username is required'),
    body('status').notEmpty().withMessage('Status is required'),
    body('createdBy').notEmpty().withMessage('CreatedBy is required'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

const validateQuizDetail = [
    body('quizId').isInt().withMessage('QuizId must be an integer'),
    body('questionId').isInt().withMessage('QuestionId must be an integer'),
    body('score').isInt().withMessage('Score must be an integer'),
    body('createdBy').notEmpty().withMessage('CreatedBy is required'),
    body('status').notEmpty().withMessage('Status is required'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = {
    validateBuilding,
    validateQuestion,
    validateQuestionOption,
    validateQuiz,
    validateQuizDetail
};
