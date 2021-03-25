const axios = require('axios');

const githubToken = process.env.GITHUB_TOKEN;

function updateRepoAction(req, res, next) {
    const config = {
        method: 'PATCH',
        url: `https://api.github.com/repos/${req.params.owner}/${req.params.name}`,
        headers: { 
            'Authorization': `token ${githubToken}`,
            'Content-Type': 'application/json'
        },
        data: {
            description: req.body.description
        }
    };

    axios.request(config)
    .then(function (response) {
        res.rawResponse = response.data;
        return next();
    })
    .catch(function (error) {
        res.rawResponse = error.message;
        return next();
    });
}

module.exports = updateRepoAction;