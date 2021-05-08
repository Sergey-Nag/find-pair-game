import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useCountdownTimer from '../../hooks/useCountdownTimer';
import { SET_TIME_GAME, END_GAME } from '../../store/game/gameTypes';
import { SET_TIME_PLAYER } from '../../store/player/playerTypes';
import {
  formatGameTime,
  getMinutesFromMs,
  getSecondsFromMs,
  getMillisecondsFromGameTime,
} from '../../utils/helpers';
import gameLevelData from '../../utils/gameLevelData';

function GameInfo() {
  const player = useSelector((state) => state.player);
  const game = useSelector((state) => state.game);
  const [gameTime, setGameTime] = useState('--:--');
  const gamemode = useSelector((state) => state.gamemode);

  const dispatch = useDispatch();
  const {
    start,
    // stop,
    pause,
    // restart,
    leftTime,
    callbacks,
  } = useCountdownTimer(gameLevelData[gamemode].time, 1000);

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
      payload: getMillisecondsFromGameTime(...gameLevelData[gamemode].time) - leftTime,
    });
  }, [leftTime, dispatch, gamemode]);

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
