const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Quiz', {
        inference: DataTypes.STRING,
        username: DataTypes.STRING,
        status: DataTypes.STRING,
        createdBy: DataTypes.STRING,
        dateCreated: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
        dateUpdated: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
    });
};
