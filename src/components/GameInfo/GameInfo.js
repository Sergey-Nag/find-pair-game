import React, { useEffect } from 'react';
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
