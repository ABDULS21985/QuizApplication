const express = require('express');
const bodyParser = require('body-parser');
const { sequelize, Building, Question, QuestionOption, Quiz, QuizDetail } = require('./models');

const app = express();
app.use(bodyParser.json());

sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err));

// Endpoints for Buildings
app.post('/buildings', async (req, res) => {
    try {
        const building = await Building.create(req.body);
        res.status(201).send(building);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/buildings', async (req, res) => {
    try {
        const buildings = await Building.findAll();
        res.status(200).send(buildings);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Endpoints for Questions
app.post('/questions', async (req, res) => {
    try {
        const question = await Question.create(req.body);
        res.status(201).send(question);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/questions', async (req, res) => {
    try {
        const questions = await Question.findAll();
        res.status(200).send(questions);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Endpoints for QuestionOptions
app.post('/questionOptions', async (req, res) => {
    try {
        const questionOption = await QuestionOption.create(req.body);
        res.status(201).send(questionOption);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/questionOptions', async (req, res) => {
    try {
        const questionOptions = await QuestionOption.findAll();
        res.status(200).send(questionOptions);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Endpoints for Quizzes
app.post('/quizzes', async (req, res) => {
    try {
        const quiz = await Quiz.create(req.body);
        res.status(201).send(quiz);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/quizzes', async (req, res) => {
    try {
        const quizzes = await Quiz.findAll();
        res.status(200).send(quizzes);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Endpoints for QuizDetails
app.post('/quizDetails', async (req, res) => {
    try {
        const quizDetail = await QuizDetail.create(req.body);
        res.status(201).send(quizDetail);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/quizDetails', async (req, res) => {
    try {
        const quizDetails = await QuizDetail.findAll();
        res.status(200).send(quizDetails);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
