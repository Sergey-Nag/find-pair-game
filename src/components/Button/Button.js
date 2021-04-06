import React from 'react';
import './Button.scss';

function Button({
  children, clickHandler, variant, isCheckbox, checked,
}) {
  return (
    <button className={`button button__${variant}`} type="button" onClick={clickHandler}>
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
