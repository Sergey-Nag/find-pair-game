import React, { useEffect, useState, useRef } from 'react';
import GameCard from './components/GameCard/GameCard';

const CARDS = [
  {
    id: 1,
    name: 'android',
    isFlipped: false,
  },
  {
    id: 2,
    name: 'lenovo',
    isFlipped: false,
  },
  {
    id: 3,
    name: 'apple',
    isFlipped: false,
  },
  {
    id: 4,
    name: 'nokia',
    isFlipped: false,
  },
  {
    id: 5,
    name: 'acer',
    isFlipped: false,
  },
  {
    id: 6,
    name: 'intel',
    isFlipped: false,
  },
  {
    id: 7,
    name: 'dell',
    isFlipped: false,
  },
  {
    id: 8,
    name: 'cisco',
    isFlipped: false,
  },
  {
    id: 9,
    name: 'hp',
    isFlipped: true,
  },
  {
    id: 10,
    name: 'htc',
    isFlipped: false,
  },
  {
    id: 11,
    name: 'beats',
    isFlipped: false,
  },
];

function App() {
  const [cards, setCards] = useState(CARDS);
  const grid = useRef(null);

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!target.closest('.card')) return;
      const copiedCards = [...cards];
      const { id } = target.closest('.card');

      const card = copiedCards[id.split('-')[1]];

      card.isFlipped = !card.isFlipped;

      setCards(copiedCards);
    };

    const { current } = grid;
    current.addEventListener('click', clickHandler);

    return () => current.removeEventListener('click', clickHandler);
  }, [cards]);

  return (
    <div className="App">
      <div className="grid" ref={grid}>
        {cards.map(({ id, name, isFlipped }, index) => (
          <GameCard
            key={id}
            id={index}
            isFlipped={isFlipped}
            image={name}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
