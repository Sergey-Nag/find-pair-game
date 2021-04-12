import {
  SET_NICK_PLAYER,
  SET_TIME_PLAYER,
  CLEAR_TIME_PLAYER,
} from './playerTypes';

const initialState = {
  nickname: null,
  time: null,
};

function playerReducer(state = initialState, action) {
  switch (action.type) {
    case SET_NICK_PLAYER:
      return {
        ...state,
        nickname: action.payload,
      };
    case SET_TIME_PLAYER:
      return {
        ...state,
        time: action.payload,
      };
    case CLEAR_TIME_PLAYER:
      return {
        ...state,
        time: null,
      };
    default:
      return state;
  }
}

export default playerReducer;
