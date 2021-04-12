import React from 'react';
import { useSelector } from 'react-redux';
import Button from '../../components/Button';
import Leaderboard from '../../components/Leaderboard';
import './Gamepage.scss';

function Gamepage() {
  const player = useSelector((state) => state.player);
  const game = useSelector((state) => state.game);
  const leaderboard = useSelector((state) => state.leaderboard);

  const nickname = player.nickname ?? '...';
  const time = game.time ?? '--:--';

  return (
    <div className="game">
      <div className="game__interface">
        <div className="game__info">
          <span className="game__nickname">{nickname}</span>
          <span className="game__time">{time}</span>
        </div>
        <div className="game__leaderboard">
          <Leaderboard leaders={leaderboard.list} />
        </div>
        <div className="game__button">
          <Button variant="danger">Surrender</Button>
        </div>
      </div>
      <div className="game__playground" />
      <div className="game__loader" />
    </div>
  );
}

export default Gamepage;
