import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useCountdownTimer from '../../hooks/useCountdownTimer';
import { SET_TIME_GAME, PAUSE_GAME, END_GAME } from '../../store/game/gameTypes';
import { SET_TIME_PLAYER } from '../../store/player/playerTypes';
import {
  formatGameTime,
  getMinutesFromMs,
  getSecondsFromMs,
  getMillisecondsFromGameTime,
} from '../../utils/helpers';

const GAME_TIME = [0, 10];

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
  } = useCountdownTimer(GAME_TIME, 1000);

  useEffect(() => {
    callbacks.finished = () => {
      console.log('finished');
      if (leftTime === 0) dispatch({ type: END_GAME });
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

    dispatch({
      type: SET_TIME_PLAYER,
      payload: getMillisecondsFromGameTime(...GAME_TIME) - leftTime,
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
