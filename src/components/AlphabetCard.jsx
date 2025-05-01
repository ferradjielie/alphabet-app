// src/components/AlphabetCard.jsx
import React from 'react';
import './AlphabetCard.css';

const AlphabetCard = ({ letter }) => {
  const playSound = () => {
    const audio = new Audio(`/audio/${letter.toLowerCase()}.mp3`);
    audio.play();
  };

  return (
    <div className="alphabet-card" onClick={playSound}>
      {letter}
    </div>
  );
};

export default AlphabetCard;
