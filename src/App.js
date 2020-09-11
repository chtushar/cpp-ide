import React, { useEffect } from 'react';
import Layout from './components/Layout/Layout';
import './App.css';

function App() {
  let URL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:5555'
      : 'https://ide-tush.herokuapp.com';
  useEffect(() => {
    console.log(URL);
  }, [URL]);

  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
