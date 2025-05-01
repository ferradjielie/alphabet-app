import React from 'react';
import AlphabetCard from './components/AlphabetCard';
import './App.css';

const App = () => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div className="app">
    
      <div className="alphabet-grid">
        {alphabet.map((letter) => (
          <AlphabetCard key={letter} letter={letter} />
        ))}
      </div>
    </div>
  );
};

export default App;
