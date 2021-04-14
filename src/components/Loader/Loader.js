import React from 'react';
import './Loader.scss';

function Loader({ width }) {
  return (
    <div className="loader">
      <div
        className="loader__line loader__countdown"
        style={{ width: `${width}%` }}
      />
    </div>
  );
}

export default Loader;
