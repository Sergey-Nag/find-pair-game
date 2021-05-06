import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Loader.scss';
import { getMillisecondsFromGameTime } from '../../utils/helpers';
import gameLevelData from '../../utils/gameLevelData';
import useCountdownTimer from '../../hooks/useCountdownTimer';
import { START_GAME } from '../../store/game/gameTypes';

function Loader() {
  const gameMode = useSelector((state) => state.gamemode);
  const dispatch = useDispatch();
  const timer = useCountdownTimer(gameLevelData[gameMode].rememberTime, 1000);
  const game = useSelector((state) => state.game);
  const { time, isStart, isPlaying } = game;
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (isStart) {
      timer.start();
      timer.callbacks.finished = () => dispatch({ type: START_GAME });
    }
  }, [isStart, timer, dispatch]);

  useEffect(() => {
    if (isPlaying) {
      const fullTime = getMillisecondsFromGameTime(2, 20);
      setPercent(100 / (fullTime / time));
    } else if (isStart) {
      const fullTime = getMillisecondsFromGameTime(...gameLevelData[gameMode].rememberTime);
      setPercent(100 / (fullTime / (fullTime - timer.leftTime)));
    }
  }, [time, gameMode, isPlaying, isStart, timer]);

  return (
    <div className="loader">
      <div
        className={`loader__line ${isPlaying ? 'loader__countdown' : ''}`}
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}

export default Loader;
