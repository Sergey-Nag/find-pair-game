import React from 'react';
import { useSelector } from 'react-redux';
import Leaderboard from '../../components/Leaderboard';
import GameLevelCard from '../../components/GameLevelCard';
import Button from '../../components/Button';
import './Homepage.scss';

function Homepage() {
  const leaderboard = useSelector((state) => state.leaderboard);

  return (
    <div className="homepage">
      <div className="homepage__leaderboard-wrapper">
        <h1 className="homepage__title">Leaderboard</h1>
        <Leaderboard leaders={leaderboard.list} />
      </div>
      <h3 className="homepage__subtitle">Select the grid size</h3>
      <div className="homepage__level-wrapper">
        <GameLevelCard level="easy" />
        <GameLevelCard level="medium" />
        <GameLevelCard level="hard" />
      </div>
      <div className="homepage__button-wrapper">
        <Button variant="large">Play</Button>
      </div>
    </div>
  );
}

export default Homepage;
