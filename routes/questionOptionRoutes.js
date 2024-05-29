const express = require('express');
const questionOptionController = require('../controllers/questionOptionController');
const { validateQuestionOption } = require('../middleware/validationMiddleware');
const router = express.Router();

router.post('/', validateQuestionOption, questionOptionController.createQuestionOption);
router.get('/', questionOptionController.getAllQuestionOptions);
router.put('/:id', validateQuestionOption, questionOptionController.updateQuestionOption);
router.delete('/:id', questionOptionController.deleteQuestionOption);

module.exports = router;
