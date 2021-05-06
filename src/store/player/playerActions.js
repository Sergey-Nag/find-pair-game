import { SET_NICK_PLAYER } from './playerTypes';

const setNicknameToStore = (value) => {
  localStorage.setItem('nickname', value);

  return {
    type: SET_NICK_PLAYER,
    payload: value,
  };
};

// eslint-disable-next-line import/prefer-default-export
export { setNicknameToStore };
