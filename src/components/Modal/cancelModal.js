import React from 'react';
import Button from '../Button';

function Cancel() {
  return (
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
  );
}

export default Cancel;
