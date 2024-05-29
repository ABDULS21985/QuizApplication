const express = require('express');
const quizDetailController = require('../controllers/quizDetailController');
const { validateQuizDetail } = require('../middleware/validationMiddleware');
const router = express.Router();

router.post('/', validateQuizDetail, quizDetailController.createQuizDetail);
router.get('/', quizDetailController.getAllQuizDetails);
router.put('/:id', validateQuizDetail, quizDetailController.updateQuizDetail);
router.delete('/:id', quizDetailController.deleteQuizDetail);

module.exports = router;
