import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useCountdownTimer from '../../hooks/useCountdownTimer';
import { SET_TIME_GAME, PAUSE_GAME } from '../../store/game/gameTypes';
import { formatGameTime, getMinutesFromMs, getSecondsFromMs } from '../../utils/helpers';

function GameInfo() {
  const player = useSelector((state) => state.player);
  const game = useSelector((state) => state.game);
  const dispatch = useDispatch();
  const {
    start,
    stop,
    pause,
    restart,
    leftTime,
    callbacks,
  } = useCountdownTimer([0, 5], 1000);

  useEffect(() => {
    callbacks.finished = () => {
      if (leftTime === 0) dispatch({ type: PAUSE_GAME });
    };

    if (game.isPlaying) {
      start();
    } else stop();
  }, [start, stop, callbacks, game.isPlaying, leftTime, dispatch]);

  useEffect(() => {
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
