import React, { useState, useEffect } from 'react';
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

  const [editorTheme, setEditorTheme] = useState('dark');
  return (
    <div className="App">
      <Layout editorTheme={editorTheme} setEditorTheme={setEditorTheme} />
    </div>
  );
}

export default App;
