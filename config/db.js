const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('quiz_system', 'postgres', 'Secured$321', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;
