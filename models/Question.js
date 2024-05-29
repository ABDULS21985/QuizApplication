const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Question', {
        text: DataTypes.STRING,
        createdBy: DataTypes.STRING,
        dateCreated: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
        dateUpdated: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
        status: DataTypes.STRING,
        title: DataTypes.STRING,
        buildingId: { type: DataTypes.INTEGER, references: { model: 'Buildings', key: 'id' } }
    });
};
