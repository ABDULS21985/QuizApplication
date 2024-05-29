const express = require('express');
const questionController = require('../controllers/questionController');
const router = express.Router();

router.post('/', questionController.createQuestion);
router.get('/', questionController.getAllQuestions);

module.exports = router;
