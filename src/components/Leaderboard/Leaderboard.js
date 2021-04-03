import React from 'react';
import './Leaderboard.scss';

function Leaderboard({ leaders }) {
  return (
    <table className="leaderboard">
      <thead className="leaderboard__head">
        <tr>
          <td className="leaderboard__col leaderboard__header-col leaderboard__col_first">
            №
          </td>
          <td className="leaderboard__col leaderboard__header-col leaderboard__col_second">
            Nickname
          </td>
          <td className="leaderboard__col leaderboard__header-col leaderboard__col_third">
            Time
          </td>
        </tr>
      </thead>
      <tbody className="leaderboard__body">
        {leaders.map(({ place, nickname, time }) => (
          <tr key={place}>
            <td>{place}</td>
            <td>{nickname}</td>
            <td>{time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Leaderboard;
