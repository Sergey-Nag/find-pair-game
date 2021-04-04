import React from 'react';
import Leaderboard from './components/Leaderboard';

function App() {
  const leaders = [
    {
      place: 1,
      nickname: 'Username',
      time: '02:15',
    },
    {
      place: 2,
      nickname: 'user',
      time: '02:20',
    },
    {
      place: 3,
      nickname: 'nick',
      time: '02:35',
    },
    {
      place: 4,
      nickname: 'nickName',
      time: '02:41',
    },
    {
      place: 5,
      nickname: '_nickname_123',
      time: '02:57',
    },
    {
      place: 6,
      nickname: 'asd',
      time: '03:16',
    },
  ];
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
    </div>
  );
}

export default App;
