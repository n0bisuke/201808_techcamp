'use strict'

const http = require('http');
const PORT = 4000;

http.createServer((req, res) => {
    console.log(req.url);
    res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
    if(req.url === '/golgo'){
        res.end('ごるごさんおはようございます。\n');
    }else if(req.url === '/ted'){
        res.end('10kgやせた。\n');
    }else if(req.url === '/hilary'){
        res.end('3kgやせた。\n');
    }else{
        res.end('おはよう\n');
    }
}).listen(PORT);

console.log(`Server running at http://localhost:${PORT}`);