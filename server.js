const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const buildingRoutes = require('./routes/buildingRoutes');
const questionRoutes = require('./routes/questionRoutes');
const questionOptionRoutes = require('./routes/questionOptionRoutes');
const quizRoutes = require('./routes/quizRoutes');
const quizDetailRoutes = require('./routes/quizDetailRoutes');

const app = express();
app.use(bodyParser.json());

sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err));

// Use the routes
app.use('/buildings', buildingRoutes);
app.use('/questions', questionRoutes);
app.use('/questionOptions', questionOptionRoutes);
app.use('/quizzes', quizRoutes);
app.use('/quizDetails', quizDetailRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
