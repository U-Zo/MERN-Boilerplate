require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const {PORT} = process.env;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/test', (req, res) => {
    res.send([
        {
            'name': 'woojo',
            'age': '27'
        }
    ]);
});

const port = PORT || 4000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})