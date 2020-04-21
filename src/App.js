import React, { useState } from 'react';
import './App.css';

// components
import Header from './components/dumb/header/header';
import Login from './components/login/login';
import Symptoms from './components/symptoms/symptoms';

// material
import Button from '@material-ui/core/Button';

function App() {
  // 
  const [currentPage, setCurrentPage] = useState('login');

  return (
    <div className="app">
      <Header home={currentPage === 'login'} />
      {currentPage === 'login' && (
        <Login onClick={() => setCurrentPage('temperature')} />
      )}
      {currentPage === 'temperature' && (
        <Symptoms />
      )}
    </div>
  );
}

export default App;
