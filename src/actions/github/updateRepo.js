const axios = require('axios');

const githubToken = process.env.GITHUB_TOKEN;
function updateRepo(req, res, next) {
    const config = {
        method: 'patch',
        url: `https://api.github.com/repos/${req.params.owner}/${req.params.name}`,
        headers: { 
            'Authorization': `token ${githubToken}`
        }
    };

    axios(config)
    .then(function (response) {
        res.rawResponse = response.data;
        return next();
    })
    .catch(function (error) {
        res.rawResponse = error.message;
        return next();
    });
}

module.exports = updateRepo;