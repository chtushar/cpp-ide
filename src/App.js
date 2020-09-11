import React, { useEffect } from 'react';
import io from 'socket.io-client';
import Layout from './components/Layout/Layout';
import './App.css';

function App() {
  let URL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:5555'
      : 'https://ide-tush.herokuapp.com';
  const socket = io.connect(URL);
  useEffect(() => {
    console.log(URL);
  }, [URL]);

  return (
    <div className="App">
      <Layout socket={socket} />
    </div>
  );
}

export default App;
