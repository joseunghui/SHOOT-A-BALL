import { io } from 'socket.io-client';

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
