'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser());
app.use(express.static('public'));

app.get('/',  (req, res)  => res.send('Hello World'));
app.get('/golgo',  (req, res)  => res.send('こんにちはごるごさん'));
app.get('/ted',  (req, res)  => res.send('こんにちはTEDさん'));
app.get('/login',  (req, res)  => res.sendFile(__dirname+'/public/login.html'));

app.post('/so',  (req, res)  => {
    console.log(req);
    console.log(req.body);
    res.send('こんにちはSOさん');
});

app.listen(PORT);

console.log(`listening on *: ${PORT}`);