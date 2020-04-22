import React, { useState } from 'react';
import './App.css';

// components
import Header from './components/dumb/header/header';
import Login from './components/login/login';
import Symptoms from './components/symptoms/symptoms';
import Final from './components/final/final';

// material
import Button from '@material-ui/core/Button';

function App() {
  // states
  // 1. login
  // 2. temperature
  // 3. final
  const [currentPage, setCurrentPage] = useState('login');

  return (
    <div className="app">
      <Header home={currentPage === 'login'} />
      {currentPage === 'login' && (
        <Login onClick={() => setCurrentPage('temperature')} />
      )}
      {currentPage === 'temperature' && (
        <Symptoms onClick={() => setCurrentPage('final')} />
      )}
      {currentPage === 'final' && (
        <Final onClick={() => setCurrentPage('login')} />
      )}
    </div>
  );
}

export default App;
