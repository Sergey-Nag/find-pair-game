import {
  SET_NICK_PLAYER,
  SET_SCORE_PLAYER,
  CLEAR_SCORE_PLAYER,
} from './playerTypes';

const initialState = {
  nickname: null,
  score: null,
};

function playerReducer(state = initialState, action) {
  switch (action.type) {
    case SET_NICK_PLAYER:
      return {
        ...state,
        nickname: action.payload,
      };
    case SET_SCORE_PLAYER:
      return {
        ...state,
        score: action.payload,
      };
    case CLEAR_SCORE_PLAYER:
      return {
        ...state,
        score: null,
      };
    default:
      return state;
  }
}

export default playerReducer;
