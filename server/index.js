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
const userSocketId = new Map();
const wordMap = new Map();

// 랜덤 초성 생성
function randomChosung() 
{
    const word = [
        "ㄱ",
        "ㄴ",
        "ㄷ",
        "ㄹ",
        "ㅁ",
        "ㅂ",
        "ㅅ",
        "ㅇ",
        "ㅈ",
        "ㅊ",
        "ㅋ",
        "ㅌ",
        "ㅍ",
        "ㅎ",
      ];
      
      function randomChosung() {
        const chosung = [
          word[Math.ceil(Math.random() * word.length) - 1],
          word[Math.ceil(Math.random() * word.length) - 1],
        ];
        return chosung.join("");
      }
}

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

    // user1과 user2가 들어왔으면 wordMap에 randomWord를 세팅(randomChosung() 에서 생성한 단어)
    socket.on("start", () => {
        if (userSocketIdMap.size === 2) {
          const randomWord = randomChosung(); // randomChosung() 로 초성 세팅
          wordMap.set("word", randomWord);
          io.emit("start", randomWord);
        }
    });

    socket.on("message", ({ fromId, message }) => {
        io.emit("message", { fromId, message });
    });
});