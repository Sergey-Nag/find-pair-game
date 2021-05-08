import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  getSecondsFromMs,
} from '../../utils/helpers';
import gameLevelData from '../../utils/gameLevelData';
import Button from '../Button';
import useValidation from '../../hooks/useValidation';
import { SET_NICK_PLAYER } from '../../store/player/playerTypes';
import { START_REMEMBER } from '../../store/game/gameTypes';

function LoginModal() {
  const gamemode = useSelector((state) => state.gamemode);
  const [inputValue, setInputValue] = useState('');
  const [timeToRemember, setTimeToRemember] = useState(0);
  const [isValidated, setIsValidated] = useState(false);
  const { isValid, tip } = useValidation(inputValue.trim());
  const dispatch = useDispatch();

  const nicknameSubmit = useCallback((e) => {
    e.preventDefault();

    setIsValidated(true);

    if (!isValid) return;

    dispatch({
      type: SET_NICK_PLAYER,
      payload: inputValue.trim(),
    });
    dispatch({
      type: START_REMEMBER,
    });
  }, [dispatch, isValid, inputValue]);

  useEffect(() => {
    const msToRemember = gameLevelData[gamemode].rememberTime[1] * 1000;
    const sec = getSecondsFromMs(msToRemember);
    setTimeToRemember(sec);
  }, [gamemode]);

  return (
    <div className="modal__wrapper">
      <div className="modal__container">
        <h4 className="modal__title">Rules</h4>
        <ol className="modal__list">
          <li className="modal__item">
            Enter your nickname and start game. It will be used for saving
            your results.
          </li>
          <li className="modal__item">
            You have
            {' '}
            <b>{timeToRemember}</b>
            {' '}
            seconds to remember all cards, before they are all
            roll over.
          </li>
          <li className="modal__item">
            When the timer starts counting down, you need to find all pairs
            of the same cards.
          </li>
          <li className="modal__item">
            The game ends when the time is up. Your time will be saved on
            the leaderboard.
          </li>
        </ol>
      </div>
      <div className="modal__container">
        <h4 className="modal__title">Nickname</h4>
        <form className="modal__form" onSubmit={nicknameSubmit}>
          <input
            className={`modal__input${isValidated && !isValid ? ' modal__input_invalid' : ''}`}
            placeholder="Enter your nickname"
            value={inputValue}
            onChange={({ target }) => setInputValue(target.value)}
            spellCheck="false"
          />
          <div className="modal__button-wrapper">
            <Link to="/">
              <Button variant="secondary">
                Cancel
              </Button>
            </Link>
            <Button variant="primary" type="submit">Continue</Button>
          </div>
        </form>
        {isValidated && !isValid && <div className="modal__container modal__container_absolute"><p>{tip}</p></div>}
      </div>
    </div>
  );
}

export default LoginModal;
