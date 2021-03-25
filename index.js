const express = require('express');
const bodyParser = require('body-parser');

if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const auth = require('./src/middlewares/auth.middleware');
const rateLimit = require('./src/middlewares/rateLimit.middleware');
const serialization = require('./src/middlewares/serialization.middleware');

const getTestAction = require('./src/actions/getTest.action');
const sumAction = require('./src/actions/sum.action');
const listOrgReposActions = require('./src/actions/github/listOrgRepos.action');
const getSingleRepoAction = require('./src/actions/github/getSingleRepo.action');
const updateRepo = require('./src/actions/github/updateRepo.action');
const updateRepoAction = require('./src/actions/github/updateRepo.action');

const app = express();

app.use(bodyParser.json())
app.get("/test", auth, rateLimit, getTestAction, serialization);
app.get('/sum', rateLimit, sumAction, serialization);
app.get('/foo', (req, res) => res.send('bar'));

app.get('/orgs/:org/repos', listOrgReposActions, serialization);
app.get('/repos/:owner/:name', getSingleRepoAction, serialization)
app.get('/repos/:owner/:name', updateRepoAction, serialization)

app.listen(3000, 'localhost', () => console.log('started'));