import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTimer } from 'react-timer-hook';
import useCountdownTimer from '../../hooks/useCountdownTimer';
import { SET_TIME_GAME } from '../../store/game/gameTypes';
import { formatGameTime, getMinutesFromMs, getSecondsFromMs } from '../../utils/helpers';

function GameInfo({ timestamp }) {
  const player = useSelector((state) => state.player);
  const game = useSelector((state) => state.game);
  const dispatch = useDispatch();
  const {
    start,
    stop,
    pause,
    leftTime,
  } = useCountdownTimer([3, 15], 1000);
  // const {
  //   seconds,
  //   start,
  //   restart,
  //   pause,
  //   isRunning,
  //   minutes,
  // } = useTimer({
  //   expiryTimestamp: timestamp,
  //   onExpire: () => console.warn('onExpire called'),
  // });

  // useEffect(() => {
  //   console.log('isRunning', isRunning);
  // }, [isRunning]);

  useEffect(() => {
    if (game.isPlaying) {
      start();
    } else pause();
  }, [start, pause, game.isPlaying]);

  useEffect(() => {
    console.log(leftTime);
    const min = getMinutesFromMs(leftTime);
    const sec = getSecondsFromMs(leftTime);

    dispatch({
      type: SET_TIME_GAME,
      payload: formatGameTime(min, sec),
    });
  }, [leftTime, dispatch]);

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
