const { User } = require('../models');
const jwt = require('jsonwebtoken');

exports.register = async (req, res, next) => {
    try {
        const user = await User.create(req.body);
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'Secured$321');
        res.status(201).send({ user, token });
    } catch (error) {
        next(error);
    }
};

exports.login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ where: { username } });
        if (!user || !(await user.validatePassword(password))) {
            throw new Error('Invalid credentials');
        }
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'Secured$321');
        res.send({ user, token });
    } catch (error) {
        next(error);
    }
};
