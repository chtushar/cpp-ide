import React, { useState } from 'react';
import './App.css';
import io from 'socket.io-client';
import Editor from '@monaco-editor/react';

function App() {
  const socket = io.connect('http://localhost:5555');
  const [theme, setTheme] = useState('dark');
  return (
    <div className="App">
      <Editor height="90vh" language="cpp" theme={theme} />
    </div>
  );
}

export default App;
