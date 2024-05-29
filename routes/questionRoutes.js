const express = require('express');
const questionController = require('../controllers/questionController');
const { validateQuestion } = require('../middleware/validationMiddleware');
const router = express.Router();

router.post('/', validateQuestion, questionController.createQuestion);
router.get('/', questionController.getAllQuestions);
router.put('/:id', validateQuestion, questionController.updateQuestion);
router.delete('/:id', questionController.deleteQuestion);

module.exports = router;
