import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTimer } from 'react-timer-hook';
import { SET_TIME_GAME } from '../../store/game/gameTypes';
import { formatGameTime, getMillisecondsFromGameTime } from '../../utils/helpers';

function GameInfo({ timestamp }) {
  const player = useSelector((state) => state.player);
  const game = useSelector((state) => state.game);
  const dispatch = useDispatch();
  const {
    seconds,
    start,
    restart,
    pause,
    isRunning,
    minutes,
  } = useTimer({
    expiryTimestamp: timestamp,
    onExpire: () => console.warn('onExpire called'),
  });

  useEffect(() => {
    console.log('isRunning', isRunning);
  }, [isRunning]);

  useEffect(() => {
    if (game.isPlaying) {
      start();
    } else pause();
  }, [game, restart, start, pause]);

  useEffect(() => {
    dispatch({
      type: SET_TIME_GAME,
      payload: formatGameTime(minutes, seconds),
    });
  }, [dispatch, minutes, seconds]);

  const nickname = player.nickname ?? '...';
  const time = game.time ?? '--:--';
  return (
    <div className="game__info">
      <span className="game__nickname">{nickname}</span>
      <span className="game__time">{time}</span>
    </div>
  );
}

export default GameInfo;
