const express = require('express');
const questionOptionController = require('../controllers/questionOptionController');
const router = express.Router();

router.post('/', questionOptionController.createQuestionOption);
router.get('/', questionOptionController.getAllQuestionOptions);

module.exports = router;
