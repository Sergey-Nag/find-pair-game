import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Leaderboard from '../../components/Leaderboard';
import GameLevelCard from '../../components/GameLevelCard';
import Button from '../../components/Button';
import './Homepage.scss';
import GAMEMODE_CHANGE from '../../store/gamemode/gamemodeTypes';

function Homepage() {
  const leaderboard = useSelector((state) => state.leaderboard);
  const gamemode = useSelector((state) => state.gamemode);
  const dispatch = useDispatch();

  const selectLevel = useCallback((level) => {
    dispatch({
      type: GAMEMODE_CHANGE,
      payload: level,
    });
  }, [dispatch]);

  return (
    <div className="homepage">
      <div className="homepage__leaderboard-wrapper">
        <h1 className="homepage__title">Leaderboard</h1>
        <Leaderboard leaders={leaderboard.list} />
      </div>
      <h3 className="homepage__subtitle">Select the grid size</h3>
      <div className="homepage__level-wrapper">
        <GameLevelCard
          level="easy"
          active={gamemode === 'easy'}
          onActive={selectLevel}
        />
        <GameLevelCard
          level="medium"
          active={gamemode === 'medium'}
          onActive={selectLevel}
        />
        <GameLevelCard
          level="hard"
          active={gamemode === 'hard'}
          onActive={selectLevel}
        />
      </div>
      <div className="homepage__button-wrapper">
        <Link to="/game">
          <Button variant="large">
            Play
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
