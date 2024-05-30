require('dotenv').config({
    path: `.env.${process.env.NODE_ENV || 'development'}`
});

const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const buildingRoutes = require('./routes/buildingRoutes');
const questionRoutes = require('./routes/questionRoutes');
const questionOptionRoutes = require('./routes/questionOptionRoutes');
const quizRoutes = require('./routes/quizRoutes');
const quizDetailRoutes = require('./routes/quizDetailRoutes');
const errorHandlingMiddleware = require('./middleware/errorHandlingMiddleware');
const authMiddleware = require('./middleware/authMiddleware');
const errorHandler = require('./middleware/errorHandler');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(bodyParser.json());

sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err));

// Apply authentication middleware conditionally
//app.use('/secure', authMiddleware);  // Apply to all routes under /secure


// Use authentication middleware
//app.use(authMiddleware);

// Use the routes
app.use('/auth', authRoutes);
app.use('/buildings', buildingRoutes);
app.use('/questions', questionRoutes);
app.use('/questionOptions', questionOptionRoutes);
app.use('/quizzes', quizRoutes);
app.use('/quizDetails', quizDetailRoutes);

// Error handling middleware
app.use(errorHandlingMiddleware);
app.use(errorHandler);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
