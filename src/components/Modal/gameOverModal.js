import React from 'react';
import Button from '../Button';
import gameOverImage from '../../assets/img/modal-images/game-over.svg';

function GameOver({ score }) {
  return (
    <div className="modal__wrapper">
      <div className="modal__container">
        <img className="modal__image" src={gameOverImage} alt="game-over" />
        <p className="modal__content">
          Your score:
          {' '}
          <span className="modal__score">{ score }</span>
        </p>
      </div>
      <div className="modal__container">
        <p className="modal__text">
          Let&apos;s play again?
        </p>
        <div className="modal__button-wrapper">
          <Button variant="secondary">Back</Button>
          <Button variant="primary">Play</Button>
        </div>
      </div>
    </div>
  );
}

export default GameOver;
