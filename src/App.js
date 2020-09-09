import React from 'react';
import './App.css';
import io from 'socket.io-client';

function App() {
  const socket = io.connect('http://localhost:5555');

  return <div className="App">Tushar</div>;
}

export default App;
