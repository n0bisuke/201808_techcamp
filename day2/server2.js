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
    // const name = req.body.userid;
    // const message = 'こんにちは' + name + 'さん';
    // const message = `こんにちは${req.body.userid}さん`;
    // res.send(`こんにちは${req.body.userid}さん`);

    let mes = '';
    if(req.body.userid === 'so' && req.body.password === 'so'){
        mes = `ログイン成功<br>`;
        mes += `こんにちは${req.body.userid}さん`;
    }else{
        mes = `ログイン失敗`;
    }
    res.send(mes);

});

app.listen(PORT);

console.log(`listening on *: ${PORT}`);