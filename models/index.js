const sequelize = require('../config/db');

const Building = require('./Building')(sequelize);
const Question = require('./Question')(sequelize);
const QuestionOption = require('./QuestionOption')(sequelize);
const Quiz = require('./Quiz')(sequelize);
const QuizDetail = require('./QuizDetail')(sequelize);

Building.hasMany(Question, { foreignKey: 'buildingId' });
Question.belongsTo(Building, { foreignKey: 'buildingId' });

Question.hasMany(QuestionOption, { foreignKey: 'questionId' });
QuestionOption.belongsTo(Question, { foreignKey: 'questionId' });

Quiz.hasMany(QuizDetail, { foreignKey: 'quizId' });
QuizDetail.belongsTo(Quiz, { foreignKey: 'quizId' });

QuizDetail.belongsTo(Question, { foreignKey: 'questionId' });

sequelize.sync({ alter: true });

module.exports = {
    sequelize,
    Building,
    Question,
    QuestionOption,
    Quiz,
    QuizDetail
};
