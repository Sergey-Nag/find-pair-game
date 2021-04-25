import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { SET_NICK_PLAYER } from '../../store/player/playerTypes';
import {
  getSecondsFromMs,
  createNicknameValid,
} from '../../utils/helpers';
import gameLevelData from '../../utils/gameLevelData';
import Button from '../Button';
import { setNicknameToStore } from '../../store/player/playerActions';

function LoginModal() {
  // const player = useSelector((state) => state.player);
  const gamemode = useSelector((state) => state.gamemode);
  const [inputValue, setInputValue] = useState('');
  const [isInputValid, setInputValid] = useState(true);
  const [isStartTyping, setStartTyping] = useState(false);
  const [timeToRemember, setTimeToRemember] = useState(0);
  const [tipText, setTipText] = useState('');
  const dispatch = useDispatch();

  const setNickname = useCallback(({ target }) => {
    const { value } = target;
    const { isCorrectlength, isCorrectSymbol } = createNicknameValid(value);

    setInputValue(value);
    if (value.length > 2) setStartTyping(true);

    if (!isStartTyping) return;

    if (!isCorrectlength()) {
      setInputValid(false);
      setTipText('Length of nickname must contains 3-24 symbols');
    } else if (!isCorrectSymbol()) {
      setInputValid(false);
      setTipText('Nickname contains incorrect symbols');
    } else setInputValid(true);
  }, [isStartTyping]);

  const nicknameSubmit = useCallback((e) => {
    e.preventDefault();
    const { isCorrectlength, isCorrectSymbol } = createNicknameValid(inputValue);

    setStartTyping(true);

    if (isCorrectlength() && isCorrectSymbol()) setInputValid(true);
    else setInputValid(false);

    if (isInputValid) {
      dispatch(setNicknameToStore(inputValue.trim()));
    }
  }, [isInputValid, inputValue, dispatch]);

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
            className={`modal__input${isInputValid ? '' : ' modal__input_invalid'}`}
            placeholder="Enter your nickname"
            onChange={setNickname}
            value={inputValue}
            spellCheck="false"
          />
          <div className="modal__button-wrapper">
            <Button variant="secondary">Cancel</Button>
            <Button variant="primary" type="submit">Continue</Button>
          </div>
        </form>
        {!isInputValid && <div className="modal__container modal__container_absolute"><p>{tipText}</p></div>}
      </div>
    </div>
  );
}

export default LoginModal;
