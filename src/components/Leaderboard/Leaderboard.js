import React, { useCallback } from 'react';
import './Leaderboard.scss';

function Leaderboard({ leaders }) {
  const returnGameTime = useCallback((ms) => {
    const min = new Date(ms).getMinutes();
    const sec = new Date(ms).getSeconds();

    return `${min < 10 ? '0' : ''}${min}:${sec}`;
  }, []);

  const returnSortedArr = useCallback(() => [...leaders].sort((a, b) => a.time - b.time),
    [leaders]);

  return (
    <div className="leaderboard">
      <div className="leaderboard__head">
        <div className="leaderboard__row">
          <div className="leaderboard__col leaderboard__col_header">
            №
          </div>
          <div className="leaderboard__col leaderboard__col_header">Nickname</div>
          <div className="leaderboard__col leaderboard__col_header leaderboard__col_text_right">
            Time
          </div>
        </div>
      </div>
      <div className="leaderboard__body">
        {returnSortedArr().map(({ id, nickname, time }) => (
          <div className="leaderboard__row" key={id}>
            <div className="leaderboard__col" />
            <div className="leaderboard__col">{nickname}</div>
            <div className="leaderboard__col leaderboard__col_text_right">
              {returnGameTime(time)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Leaderboard;
