const express = require('express')
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
const path = require('path');

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
    // res.sendFile(__dirname + '/index.html');
});

server.listen(3000, () => {
    console.log(`Example app listening on 3000`)
});