const express = require('express');
const serverless = require('serverless-http')

const app = express();

const router = express.Router();

router.get('/', (req, res) =>{
    res.json({
        'hello': 'hi'
    })
})

router.get('/test', (req, res) =>{
    res.json({
        'test': 'testt1'
    })
})

module.exports.handler = serverless(app);

app.use('/.netlify/functions/api', router);