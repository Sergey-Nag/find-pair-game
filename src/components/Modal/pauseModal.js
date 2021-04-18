import React from 'react';

function overHandler() {
  const item = document.querySelector('.modal__pause-item');
  const container = document.querySelector('.modal__pause');
  item.style.display = 'block';
  container.classList.add('active');
}

function outHandler() {
  const item = document.querySelector('.modal__pause-item');
  const container = document.querySelector('.modal__pause');
  item.style.display = 'none';
  container.classList.remove('active');
}

function Pause() {
  return (
    <div className="modal__wrapper">
      <div className="modal__container">
        <div
          className="modal__pause"
          onMouseOver={overHandler}
          onMouseOut={outHandler}
          onBlur
          onFocus
        >
          <span className="modal__pause-item" />
        </div>
        <p className="modal__content">
          Press
          {' '}
          <div className="modal__escape-wr">
            <div className="modal__escape">
              <span className="modal__text">
                Esc
              </span>
            </div>
          </div>
          {' '}
          to continue
        </p>
      </div>
    </div>
  );
}

export default Pause;
