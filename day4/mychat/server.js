'use strict';

const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http); //5.追記
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    
    socket.on('mychat', (msg) => {
        // io.emit('mychat', msg);
        socket.broadcast.emit('mychat', msg);

        

        console.log(`message: ${msg}`);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

http.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});