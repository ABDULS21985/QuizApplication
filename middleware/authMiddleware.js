const basicAuth = require('express-basic-auth');

module.exports = basicAuth({
    users: { 'admin': 'supersecret' },
    challenge: true
});
