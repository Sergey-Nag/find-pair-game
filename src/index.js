import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/index.scss';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App abc="hello" />
  </React.StrictMode>,
  document.getElementById('root'),
);
