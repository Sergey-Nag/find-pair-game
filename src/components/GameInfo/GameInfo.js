import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useCountdownTimer from '../../hooks/useCountdownTimer';
import { SET_TIME_GAME, PAUSE_GAME } from '../../store/game/gameTypes';
import { formatGameTime, getMinutesFromMs, getSecondsFromMs } from '../../utils/helpers';

function GameInfo() {
  const player = useSelector((state) => state.player);
  const game = useSelector((state) => state.game);
  const [gameTime, setGameTime] = useState('--:--');

  const dispatch = useDispatch();
  const {
    start,
    // stop,
    pause,
    // restart,
    leftTime,
    callbacks,
  } = useCountdownTimer([3, 0], 1000);

  useEffect(() => {
    callbacks.finished = () => {
      console.log('finished');
      if (leftTime === 0) dispatch({ type: PAUSE_GAME });
    };
    callbacks.paused = () => {
      console.log('paused');
    };

    if (game.isPlaying) {
      start();
    } else pause();
  }, [start, pause, callbacks, game.isPlaying, leftTime, dispatch]);

  useEffect(() => {
    dispatch({
      type: SET_TIME_GAME,
      payload: leftTime,
    });
  }, [leftTime, dispatch]);

  useEffect(() => {
    const min = getMinutesFromMs(game.time);
    const sec = getSecondsFromMs(game.time);

    setGameTime(formatGameTime(min, sec));
  }, [game]);

  return (
    <div className="game__info">
      <span className="game__nickname">{player.nickname ?? '...'}</span>
      <span className="game__time">{gameTime}</span>
    </div>
  );
}

export default GameInfo;
