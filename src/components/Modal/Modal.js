import React from 'react';
import './Modal.scss';
import Button from '../Button';
import gameOverImage from '../../assets/img/modal-images/game-over.svg';
import pauseImage from '../../assets/img/modal-images/pause.svg';

function Modal({
  isLogin, isCancel, isGameOver, isPause, score,
}) {
  return (
    <div className="modal">
      {isLogin && (
        <div className="modal__wrapper">
          <div className="modal__container">
            <h4 className="modal__title">Rules</h4>
            <ol className="modal__list">
              <li className="modal__item">
                Enter your nickname and start game. It will be used for saving
                your results.
              </li>
              <li className="modal__item">
                You have N seconds to remember all cards, before they are all
                roll over.
              </li>
              <li className="modal__item">
                When the timer starts counting down, you need to find all pairs
                of the same cards.
              </li>
              <li className="modal__item">
                The game ends when the time is up. Your time will be saved on
                the leaderboard.
              </li>
            </ol>
          </div>
          <div className="modal__container">
            <h4 className="modal__title">Nickname</h4>
            <form className="modal__form">
              <input
                className="modal__input"
                placeholder="Enter your nickname"
              />
              <div className="modal__button-wrapper">
                <Button variant="secondary">Cancel</Button>
                <Button variant="primary">Continue</Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isCancel && (
        <div className="modal__wrapper">
          <div className="modal__container">
            <p className="modal__text">
              Are you sure you want to quit the game?
            </p>
            <div className="modal__button-wrapper">
              <Button variant="danger">Quit</Button>
              <Button variant="primary">Continue</Button>
            </div>
          </div>
        </div>
      )}

      {isGameOver && (
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
      )}

      {isPause && (
        <div className="modal__wrapper">
          <div className="modal__container">
            <img className="modal__image" src={pauseImage} alt="pause" />
            <p className="modal__content">
              Press &quot;ESC&quot; to continue
            </p>
          </div>

        </div>
      )}
    </div>
  );
}

export default Modal;
