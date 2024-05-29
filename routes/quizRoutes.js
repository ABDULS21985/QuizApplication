const express = require('express');
const quizController = require('../controllers/quizController');
const { validateQuiz } = require('../middleware/validationMiddleware');
const router = express.Router();

router.post('/', validateQuiz, quizController.createQuiz);
router.get('/', quizController.getAllQuizzes);
router.put('/:id', validateQuiz, quizController.updateQuiz);
router.delete('/:id', quizController.deleteQuiz);

module.exports = router;
