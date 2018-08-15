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

app.get('/kuku',  (req, res)  => {
    let mes = '';
    for (let i = 1; i < 10; i++) {
        for (let x = 1; x < 10; x++) {
            mes += (i * x) + ' ';
        }
        mes += '<br>';
    }
    
    res.send(mes);
});

// app.post('/so',  (req, res)  => {
//     console.log(req);
//     console.log(req.body);
//     if( ~~~ === 'so' && ~~~ === 'sopass'){
//         ログイン成功処理
//     }else{
//         ログイン失敗処理
//     }
//     // const name = 'SO';
//     // const message = 'こんにちは' + name;
//     // res.send(message);
// });

app.listen(PORT);

console.log(`listening on *: ${PORT}`);