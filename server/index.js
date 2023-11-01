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

server.listen(3000, () => {
    console.log(`Example app listening on 3000`)
});

// map 을 사용해서 데이터 저장
const userSocketIdMap = new Map();

io.on('connection', (socket) => {

    socket.on("join", (userId) => {
        // 2p 게임
        // size가 0이면 user1을 저장하고 아니면 user2로 저장
        if (userSocketIdMap.size === 0) {
          userSocketIdMap.set("user1", userId);
          io.emit("join", `hi user1 ${userId}`);
        } else {
          userSocketIdMap.set("user2", userId);
          io.emit("join", `hi user2 ${userId}`);
        }
        console.log(userSocketIdMap.keys(), userId);
    });

    // user1과 user2가 모두 들어왔는지 확인
    socket.on("start", () => {
        if (userSocketIdMap.size === 2) {
          
        }
    });

    socket.on("message", ({ fromId, message }) => {
        io.emit("message", { fromId, message });
    });
});