const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Building', {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        createdBy: DataTypes.STRING,
        dateCreated: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
        dateUpdated: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
        status: DataTypes.STRING
    });
};
