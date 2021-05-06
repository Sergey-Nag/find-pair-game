import React from 'react';
import './Modal.scss';

import LoginModal from './loginModal';
import GameOver from './gameOverModal';
import Cancel from './cancelModal';
import Pause from './pauseModal';

function Modal({
  isLogin, isCancel, isGameOver, isPause, score,
}) {
  if (isLogin) {
    return (
      <div className="modal">
        <LoginModal />
      </div>
    );
  }
  if (isCancel) {
    return (
      <div className="modal">
        <Cancel />
      </div>
    );
  }
  if (isGameOver) {
    return (
      <div className="modal">
        <GameOver score={score} />
      </div>
    );
  }
  if (isPause) {
    return (
      <div className="modal">
        <Pause />
      </div>
    );
  }
}

export default Modal;
