import React, { useState } from 'react';
import io from 'socket.io-client';
import EditorWrapper from './components/Editor/EditorWrapper';
import Layout from './components/Layout/Layout';
import './App.css';

function App() {
  const socket = io.connect('http://localhost:5555');
  const [editorTheme, setEditorTheme] = useState('dark');
  return (
    <div className="App">
      <Layout editorTheme={editorTheme} setEditorTheme={setEditorTheme} />
    </div>
  );
}

export default App;
