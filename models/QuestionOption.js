const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('QuestionOption', {
        text: DataTypes.STRING,
        isCorrect: DataTypes.BOOLEAN,
        score: DataTypes.INTEGER,
        questionId: { type: DataTypes.INTEGER, references: { model: 'Questions', key: 'id' } },
        createdBy: DataTypes.STRING,
        dateCreated: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
        dateUpdated: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
        status: DataTypes.STRING
    });
};
