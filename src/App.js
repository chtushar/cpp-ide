import React from 'react';
import Layout from './components/Layout/Layout';
import './App.css';

function App() {
  let URL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:5555'
      : window.location.origin;

  return (
    <div className="App">
      <Layout URL={URL} />
    </div>
  );
}

export default App;
