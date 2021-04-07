import React, { useEffect, useState } from 'react';
import './GameLevelCard.scss';

import gameLevelData from '../../utils/gameLevelData';
import Button from '../Button';

function GameLevelCard({ level, active, onActive }) {
  const [cardData, setCardData] = useState({});

  useEffect(() => {
    setCardData({ ...gameLevelData[level] });
  }, [level, setCardData]);

  return (
    <div className="gamelevel">
      <div className="gamelevel__image_wrapp">
        <img
          className={`gamelevel__image${active ? ' gamelevel__image_active' : ''}`}
          src={cardData.img}
          alt={level}
        />
      </div>
      <div className="gamelevel__info_wrapp">
        <h3 className="gamelevel__info">
          <span className="gamelevel__name">{level}</span>
          <span className="gamelevel__time">{cardData.time}</span>
        </h3>
      </div>
      <div className="gamelevel__button_wrapp">
        <Button
          isCheckbox
          variant="primary"
          checked={active}
          clickHandler={() => onActive(level)}
        >
          {cardData.layout}
        </Button>
      </div>
    </div>
  );
}

export default GameLevelCard;
