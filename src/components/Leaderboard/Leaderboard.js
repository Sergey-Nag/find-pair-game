import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import './Leaderboard.scss';
import { formatGameTime } from '../../utils/helpers';

function Leaderboard({ inGame }) {
  const leaderboard = useSelector((state) => state.leaderboard);

  const returnGameTime = useCallback((ms) => {
    const min = new Date(ms).getMinutes();
    const sec = new Date(ms).getSeconds();

    return formatGameTime(min, sec);
  }, []);

  const returnSortedArr = useCallback(() => {
    const copiedLeaders = [...leaderboard.list];

    if (inGame) {
      const playerObj = {
        id: 'player',
        nickname: 'test',
        time: 0,
        // time: 1327536161417,
        isPlayer: true,
      };

      copiedLeaders.push(playerObj);
    }

    return copiedLeaders.sort((a, b) => a.time - b.time);
  }, [leaderboard.list, inGame]);

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
      <div className={`leaderboard__body ${inGame ? '' : 'leaderboard__body_top-players'}`}>
        {returnSortedArr().map(({
          id, nickname, time, isPlayer,
        }) => (
          <div
            className={
              `leaderboard__row ${(inGame && isPlayer) ? 'leaderboard__row_player' : ''}`
            }
            key={id}
          >
            <div className={`leaderboard__col ${(inGame && isPlayer && time === 0) ? 'leaderboard__col_no-counter' : ''}`} />
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
