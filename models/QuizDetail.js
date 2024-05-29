const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('QuizDetail', {
        quizId: { type: DataTypes.INTEGER, references: { model: 'Quizzes', key: 'id' } },
        questionId: { type: DataTypes.INTEGER, references: { model: 'Questions', key: 'id' } },
        score: DataTypes.INTEGER,
        createdBy: DataTypes.STRING,
        dateCreated: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
        dateUpdated: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
        status: DataTypes.STRING
    });
};
