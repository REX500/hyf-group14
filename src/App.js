import React from 'react';
import './App.css';

// components
import Header from './components/dumb/header/header';

// material
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="app">
      <Header home>hjælpDeÆldre</Header>
      <main>
        COVID-19 Symptom Tracker
      </main>
      <footer>
        <Button variant="contained" color="secondary">
          Log In
        </Button>
      </footer>
    </div>
  );
}

export default App;
