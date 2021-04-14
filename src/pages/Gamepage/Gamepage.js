import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import GameInfo from '../../components/GameInfo';
import Leaderboard from '../../components/Leaderboard';
import Loader from '../../components/Loader/Loader';
import Playground from '../../components/Playground';
import { PAUSE_GAME, START_GAME } from '../../store/game/gameTypes';
import { SET_NICK_PLAYER } from '../../store/player/playerTypes';
import './Gamepage.scss';

function Gamepage() {
  const gamemode = useSelector((state) => state.gamemode);
  const dispatch = useDispatch();
  const [isPlay, setPlay] = useState(false);

  useEffect(() => {
    dispatch({ type: isPlay ? START_GAME : PAUSE_GAME });
    dispatch({ type: SET_NICK_PLAYER, payload: 'Sergey' });
  }, [dispatch, isPlay]);

  console.log('render');
  return (
    <div className="game">
      <div className="game__interface">
        <GameInfo />
        <div className="game__leaderboard">
          <Leaderboard inGame />
        </div>
        <div className="game__button">
          <Button variant="danger" clickHandler={() => setPlay(!isPlay)}>Surrender</Button>
        </div>
      </div>
      <div className="game__playground">
        <Playground
          level={gamemode}
        />
      </div>
      <div className="game__loader">
        <Loader width="50" />
      </div>
    </div>
  );
}

export default Gamepage;
