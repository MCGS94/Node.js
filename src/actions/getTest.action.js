const ip = require('../services/ip.service');

function getTestAction(req, res, next) {
    ip(req.ip);
    const query = req.query.q;
    res.rawResponse = req.query.q;
    return next();
}

module.exports = getTestAction;