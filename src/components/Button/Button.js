import React from 'react';
import './Button.scss';

function Button({
  children, clickHandler, classes, isCheckbox, checked,
}) {
  return (
    <button className={`button ${classes.split(' ').map((el) => `button__${el}`).join('')}`} type="button" onClick={clickHandler}>
      {isCheckbox && (
        <div className="button__box">
          <div className={`button__checkbox ${checked ? 'active' : ''}`} />
          {children}
        </div>
      )}
      {!isCheckbox && children}
    </button>
  );
}

export default Button;
