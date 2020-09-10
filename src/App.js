import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Layout from './components/Layout/Layout';
import './App.css';

function App() {
  const socket = io.connect(process.env.PUBLIC_URL || 'http://localhost:5555');
  useEffect(() => {
    console.log(process.env.PUBLIC_URL);
  }, []);
  const [editorTheme, setEditorTheme] = useState('dark');
  return (
    <div className="App">
      <Layout editorTheme={editorTheme} setEditorTheme={setEditorTheme} />
    </div>
  );
}

export default App;
