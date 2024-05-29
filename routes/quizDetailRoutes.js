const express = require('express');
const quizDetailController = require('../controllers/quizDetailController');
const router = express.Router();

router.post('/', quizDetailController.createQuizDetail);
router.get('/', quizDetailController.getAllQuizDetails);

module.exports = router;
