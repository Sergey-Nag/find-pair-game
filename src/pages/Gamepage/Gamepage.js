import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import GameInfo from '../../components/GameInfo';
import Leaderboard from '../../components/Leaderboard';
import Playground from '../../components/Playground';
import { PAUSE_GAME, START_GAME } from '../../store/game/gameTypes';
import { getMillisecondsFromGameTime } from '../../utils/helpers';
import './Gamepage.scss';

function Gamepage() {
  // const game = useSelector((state) => state.game);
  const gamemode = useSelector((state) => state.gamemode);
  const dispatch = useDispatch();
  const [isPlay, setPlay] = useState(false);
  const time = getMillisecondsFromGameTime({ min: 5, sec: 0 });

  useEffect(() => {
    dispatch({ type: isPlay ? START_GAME : PAUSE_GAME });
  }, [dispatch, isPlay]);

  console.log('render');
  return (
    <div className="game">
      <div className="game__interface">
        <GameInfo timestamp={time} />
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
      <div className="game__loader" />
    </div>
  );
}

export default Gamepage;
