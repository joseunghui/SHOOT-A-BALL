const express = require('express')
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
const path = require('path');

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.on('hi', (info) => { //info 정보를 받아서 
        io.emit('hi', `Hi user ${info}`); // 모든 유저에게 `Hi user ${info}` 메시지 보내기
        console.log(socket.id); // 서버 확인
    })
    
})

server.listen(3000, () => {
    console.log(`Example app listening on 3000`)
});