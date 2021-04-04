import React from 'react';
import './Leaderboard.scss';

function Leaderboard({ leaders }) {
  console.log('asd');
  return (
    <table className="leaderboard">
      <thead className="leaderboard__head">
        <tr>
          <td className="leaderboard__col leaderboard__col_header leaderboard__col_width_sm">
            №
          </td>
          <td className="leaderboard__col leaderboard__col_header">
            Nickname
          </td>
          <td className="leaderboard__col leaderboard__col_header leaderboard__col_text_right">
            Time
          </td>
        </tr>
      </thead>
      <tbody className="leaderboard__body">
        {leaders.map(({ place, nickname, time }) => (
          <tr className="leaderboard__row" key={place}>
            <td className="leaderboard__col">{place}</td>
            <td className="leaderboard__col">{nickname}</td>
            <td className="leaderboard__col leaderboard__col_text_right">{time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Leaderboard;
