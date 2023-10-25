import { useState } from 'react';
import { useEffect } from 'react';
import { Socket } from 'socket.io';
import { io } from 'socket.io-client';

const [connect, setConnect] = useState(false); // 연결 확인용
const [word, setWord] = useState(""); // 서버로부터 받은 단어를 화면에 표시
const [list, setList] = useState([]); // 모든 유저가 사용한 단어를 화면에 표시




function App() {
  const socket = io();

  socket.on('hi', (info) => {
    console.log(info);
  });

  return (
    <div>
      <button onClick={() => socket.emit('hi', socket.id)}>connet</button>
    </div>
  )
}

export default App;
