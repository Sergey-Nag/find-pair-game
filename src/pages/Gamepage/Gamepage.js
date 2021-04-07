import React from 'react';
import Button from '../../components/Button';
import Leaderboard from '../../components/Leaderboard';
import './Gamepage.scss';

function Gamepage() {
  return (
    <div className="game">
      <div className="game__interface">
        <div className="game__info">
          <span className="game__nickname">Username</span>
          <span className="game__time">01:00</span>
        </div>
        <div className="game__leaderboard">
          <Leaderboard leaders={[]} />
        </div>
        <div className="game__button">
          <Button variant="danger">Surrender</Button>
        </div>
      </div>
      <div className="game__playground"></div>
      <div className="game__loader"></div>
    </div>
  );
}

export default Gamepage;
