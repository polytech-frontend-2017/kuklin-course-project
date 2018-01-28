const express = require('express');
var bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static('./'));

app.listen(5001, 'localhost', () => console.log('listening'));

app.get('/alpha/booked', function (req, res) {
    res.statusCode = 200;
    res.send({'total': 100, 'booked': 30});
});

app.post('/alpha/apply', function (req, res) {
    if (req.body.name && req.body.email) {
        res.statusCode = 200;
    } else {
        res.statusCode = 500;
    }
    res.send();
});

app.get('*', function (req, res) {
    res.statusCode = 200;
    res.sendFile(__dirname + '/index.html');
});
