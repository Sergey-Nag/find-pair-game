import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Playground.scss';
import GameCard from '../GameCard';
import { flipCard } from '../../store/cards/cardsActions';

function Playground({ level }) {
  const cards = useSelector((state) => state.cards);
  const grid = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const { current } = grid;

    const clickHandler = ({ target }) => {
      const card = target.closest('.card');
      if (!card) return;

      const cardId = card.id.split('-')[1];

      dispatch(flipCard(cardId));
    };

    current.addEventListener('click', clickHandler);

    return () => current.removeEventListener('click', clickHandler);
  }, [dispatch]);

  return (
    <div className={`playground playground__level_${level}`} ref={grid}>
      {cards.list.map((card, index) => <GameCard key={card.id} index={index} card={card} />)}
    </div>
  );
}

export default Playground;
