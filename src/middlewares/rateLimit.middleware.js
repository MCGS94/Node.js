function rateLimit(req, res, next) {
    console.log('rate limit');

    return next();
}

module.exports = rateLimit;