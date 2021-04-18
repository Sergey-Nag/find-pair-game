import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './Loader.scss';
import { getMillisecondsFromGameTime } from '../../utils/helpers';

function Loader() {
  const game = useSelector((state) => state.game);
  const { time } = game;
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    const fullTime = getMillisecondsFromGameTime(2, 20);
    setPercent(100 / (fullTime / time));
  }, [time]);

  return (
    <div className="loader">
      <div
        className="loader__line "
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}

export default Loader;
