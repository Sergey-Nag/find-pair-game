import React from 'react';
import Button from '../Button';

function Login() {
  return (
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
  );
}

export default Login;
