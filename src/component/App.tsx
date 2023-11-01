import { useState } from 'react';
import { useEffect } from 'react';
import { Socket } from 'socket.io';
import { io } from 'socket.io-client';

function App() {
  const socket = io();

  socket.on('hi', (info) => {
    console.log(info);
  });

  return (
    <div>
      <button onClick={() => socket.emit('hi', socket.id)}>connet</button>
      <canvas id="canvas"></canvas>
    </div>
  )
}

export default App;
