import React from 'react';
import './Button.scss';

function Button({
  children, clickHandler, classes, isCheckbox, checked,
}) {
  const variantClass = classes
    .split(' ')
    .map((el) => `button__${el}`)
    .join('');

  return (
    <button className={`button ${variantClass}`} type="button" onClick={clickHandler}>
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
