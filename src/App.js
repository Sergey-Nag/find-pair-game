import React, { useCallback, useState } from 'react';
import GameLevelCard from './components/GameLevelCard';
import Leaderboard from './components/Leaderboard';

function App() {
  const leaders = [
    {
      id: 1,
      nickname: 'Username',
      time: 1327536135417,
    },
    {
      id: 3,
      nickname: 'nick',
      time: 1327536265417,
    },
    {
      id: 2,
      nickname: 'user',
      time: 1327536140417,
    },
    {
      id: 4,
      nickname: 'nickName',
      time: 1327536161417,
    },
    {
      id: 5,
      nickname: '_nickname_123',
      time: 1327536177417,
    },
    {
      id: 6,
      nickname: 'asd',
      time: 1327536196417,
    },
  ];

  const [activeMode, setActiveMode] = useState('easy');

  const activeLevel = useCallback((level) => {
    setActiveMode(level);
  }, []);

  return (
    <div className="App">
      <div
        style={{
          margin: '0 auto',
          width: 900,
          padding: '2em',
        }}
      >
        <Leaderboard leaders={leaders} />
      </div>
      <div style={{
        width: 900,
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-around',
      }}
      >
        <GameLevelCard
          level="easy"
          onActive={activeLevel}
          active={activeMode === 'easy'}
        />
        <GameLevelCard
          level="medium"
          onActive={activeLevel}
          active={activeMode === 'medium'}
        />
        <GameLevelCard
          level="hard"
          onActive={activeLevel}
          active={activeMode === 'hard'}
        />
      </div>
    </div>
  );
}

export default App;
