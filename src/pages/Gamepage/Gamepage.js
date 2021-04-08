import React, { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import Leaderboard from '../../components/Leaderboard';
import Playground from '../../components/Playground';
import useCountdownTimer from '../../hooks/useCountdownTimer';
import { END_GAME, SET_TIME_GAME, START_GAME } from '../../store/game/gameTypes';
import { formatGameTime } from '../../utils/helpers';
import './Gamepage.scss';

function Gamepage() {
  const player = useSelector((state) => state.player);
  const game = useSelector((state) => state.game);
  const gamemode = useSelector((state) => state.gamemode);
  const dispatch = useDispatch();

  const nickname = player.nickname ?? '...';
  const time = game.time ?? '--:--';
  const endTime = useMemo(() => ({ min: 3, sec: 0 }), []);

  useCountdownTimer(game.isPlaying, endTime, useCallback((t) => {
    const gameTime = new Date(t);
    const min = gameTime.getMinutes();
    const sec = gameTime.getSeconds();

    dispatch({
      type: SET_TIME_GAME,
      payload: formatGameTime(min, sec),
    });
  }, [dispatch]));

  useEffect(() => {
    console.log(game);
  }, [game]);

  const clickGame = useCallback(() => {
    let type = START_GAME;

    if (game.isPlaying) type = END_GAME;

    dispatch({ type });
  }, [dispatch, game]);

  console.log('render');
  return (
    <div className="game">
      <div className="game__interface">
        <div className="game__info">
          <span className="game__nickname">{nickname}</span>
          <span className="game__time">{time}</span>
        </div>
        <div className="game__leaderboard">
          <Leaderboard inGame />
        </div>
        <div className="game__button">
          <Button variant="danger" clickHandler={clickGame}>Surrender</Button>
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
