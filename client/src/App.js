import './App.css';
import io from 'socket.io-client';
import { useState } from 'react';


const socket = io.connect('http://localhost:3001');


function App() {
  const [userName, setUserName] = useState('');
  const joinRoom = () => {
    if(userName !== '') {
      socket.emit('join', userName);
    }
  }


  return (
    <div className="App">
        <h1>Welcome To Fakecord</h1>
        <input 
          type="text"
          placeholder="Enter Your Name" 
          onChange={(event) => {
          setUserName(event.target.value)
          }}
          />
        <button>Join the Chat</button>
    </div>
  );
}

export default App;
