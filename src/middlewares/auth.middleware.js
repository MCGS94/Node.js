
function auth(req, res, next) {
    if (req.headers.authorization) {
        return next();
    }

    console.log('acces denied');
    return res.status(403).send('acces denied');
}

module.exports = auth;

