import React from 'react';
import './GameCard.scss';

function GameCard({ a }) {
  return (
    <div className={`card${a ? ' card_flipped' : ''}`}>
      <div className="card__shirt" />
      <div className="card__shadow" />
    </div>
  );
}

export default GameCard;
