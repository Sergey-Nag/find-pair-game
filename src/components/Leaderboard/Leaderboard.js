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
    <table className="leaderboard">
      <thead className="leaderboard__head">
        <tr>
          <td className="leaderboard__col leaderboard__col_header leaderboard__col_width_sm">
            №
          </td>
          <td className="leaderboard__col leaderboard__col_header">Nickname</td>
          <td className="leaderboard__col leaderboard__col_header leaderboard__col_text_right">
            Time
          </td>
        </tr>
      </thead>
      <tbody className="leaderboard__body">
        {returnSortedArr().map(({ id, nickname, time }) => (
          <tr className="leaderboard__row" key={id}>
            <td className="leaderboard__col" />
            <td className="leaderboard__col">{nickname}</td>
            <td className="leaderboard__col leaderboard__col_text_right">
              {returnGameTime(time)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Leaderboard;
