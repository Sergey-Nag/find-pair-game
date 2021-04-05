import React from 'react';
import './GameCard.scss';
import gameCardImages from '../../utils/gameCardImages';

function GameCard({ id, isFlipped, image }) {
  return (
    <div id={`card-${id}`} className={`card${isFlipped ? ' card_flipped' : ''}`}>
      <div className="card__shirt" />
      <div className="card__face" style={{ backgroundImage: `url(${gameCardImages[image]})` }} />
      <div className="card__shadow" />
    </div>
  );
}

export default GameCard;
