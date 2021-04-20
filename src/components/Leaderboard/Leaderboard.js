import React, { useCallback, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import './Leaderboard.scss';
import {
  formatGameTime,
  getMinutesFromMs,
  getSecondsFromMs,
  isPlayerPositionOnEndOfBlock,
} from '../../utils/helpers';

function Leaderboard({ inGame }) {
  const leaderboard = useSelector((state) => state.leaderboard);
  const player = useSelector((state) => state.player);
  const tableScroll = useRef(null);

  const returnGameTime = useCallback((ms) => {
    const min = getMinutesFromMs(ms);
    const sec = getSecondsFromMs(ms);

    return formatGameTime(min, sec);
  }, []);

  const returnSortedArr = useCallback(() => {
    const copiedLeaders = [...leaderboard.list];

    if (inGame) {
      copiedLeaders.push({
        id: 'player',
        nickname: player.nickname,
        time: player.time,
      });
    }

    return copiedLeaders.sort((a, b) => a.time - b.time);
  }, [leaderboard.list, inGame, player]);

  useEffect(() => {
    if (!inGame) return;

    const containerHeight = tableScroll.current.clientHeight;
    const playerBlock = tableScroll.current.querySelector('.leaderboard__row_player');
    const playerHeight = playerBlock.clientHeight;
    const playerPosTop = playerBlock.offsetTop;
    if (isPlayerPositionOnEndOfBlock(playerBlock, containerHeight - playerHeight)) {
      tableScroll.current.scrollTo(
        0,
        playerPosTop - containerHeight + playerHeight * 2,
      );
    }
  }, [inGame, player]);

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
      <div ref={tableScroll} className={`leaderboard__body ${inGame ? '' : 'leaderboard__body_top-players'}`}>
        {returnSortedArr().map(({
          id, nickname, time,
        }) => (
          <div
            key={id}
            className={
              `leaderboard__row ${(inGame && id === 'player') ? 'leaderboard__row_player' : ''}`
            }
          >
            <div className={`leaderboard__col ${(inGame && id === 'player' && time === 0) ? 'leaderboard__col_no-counter' : ''}`} />
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
