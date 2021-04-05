import React from 'react';
import Button from './components/Button';

function click(e) {
  // const { target } = e;
  // if (target.closest('.button__box')) {
  //   const checkbox = document.querySelector('.button__checkbox');
  //   checkbox.classList.toggle('active');
  // }
}

function App() {
  return (
    <div className="App">
      {' '}
      <Button classes="button button__primary" clickHandler={click}>
        Play
      </Button>
      <Button classes="button button__secondary" clickHandler={click}>
        Play
      </Button>
      <Button classes="button button__danger" clickHandler={click}>
        Play
      </Button>
      <Button classes="button button__large" clickHandler={click}>
        Play
      </Button>
      <Button isCheckbox checked classes="button button__primary" clickHandler={click}>
        4X4
      </Button>
    </div>
  );
}

export default App;
