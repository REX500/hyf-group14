import React, { useState } from 'react';
import './App.css';

// components
import Header from './components/dumb/header/header';
import Login from './components/login/login';
import Symptoms from './components/symptoms/symptoms';
import Temperature from './components/temperature/temperature';
import Final from './components/final/final';

function App() {
  // states
  // 1. login
  // 2. symptoms
  // 3. temperature
  // 4. final
  const [currentPage, setCurrentPage] = useState('login');

  return (
    <div className="app">
      <Header home={currentPage === 'login'} />
      
      {currentPage === 'login' && (
        <Login onClick={() => setCurrentPage('symptoms')} />
      )}
      {currentPage === 'symptoms' && (
        <Symptoms onClick={() => setCurrentPage('temperature')} />
      )}
      {currentPage === 'temperature' && (
        <Temperature onClick={() => setCurrentPage('final')} />
      )}
      
      {currentPage === 'final' && (
        <Final onClick={() => setCurrentPage('login')} />
      )}
    </div>
  );
}

export default App;
