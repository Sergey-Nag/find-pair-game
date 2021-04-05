import React from 'react';
import GameCard from './components/GameCard/GameCard';

function App() {
  return (
    <div className="App">
      <div className="grid">
        <GameCard />
        <GameCard a />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard a />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
      </div>
    </div>
  );
}

export default App;
