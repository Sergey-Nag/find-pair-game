import React from 'react';
import { useSelector } from 'react-redux';
import Button from '../../components/Button';
import GameInfo from '../../components/GameInfo';
import Leaderboard from '../../components/Leaderboard';
import Loader from '../../components/Loader/Loader';
import Playground from '../../components/Playground';
import './Gamepage.scss';
import Modal from '../../components/Modal';

function Gamepage() {
  const gamemode = useSelector((state) => state.gamemode);
  const isStart = useSelector((state) => state.game.isStart);

  console.log('render');
  return (
    <>
      {!isStart && <Modal isLogin />}
      <div className="game">
        <div className="game__interface">
          <GameInfo />
          <div className="game__leaderboard">
            <Leaderboard inGame />
          </div>
          <div className="game__button">
            <Button variant="danger">Surrender</Button>
          </div>
        </div>
        <div className="game__playground">
          <Playground
            level={gamemode}
          />
        </div>
        <div className="game__loader">
          <Loader />
        </div>
      </div>
    </>
  );
}

export default Gamepage;
