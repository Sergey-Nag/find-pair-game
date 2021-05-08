import {
  START_GAME,
  PAUSE_GAME,
  END_GAME,
  SET_TIME_GAME,
  START_REMEMBER,
} from './gameTypes';

const initialState = {
  isRememberTime: false,
  isStart: false,
  isPlaying: false,
  isPause: false,
  isGameOver: false,
  time: null,
};

function gameReducer(state = initialState, { type, payload }) {
  switch (type) {
    case START_REMEMBER:
      return {
        ...state,
        isRememberTime: true,
        isStart: true,
      };

    case START_GAME:
      return {
        ...state,
        isPlaying: true,
        isPause: false,
        isRememberTime: false,
      };

    case PAUSE_GAME:
      return {
        ...state,
        isPlaying: false,
        isPause: true,
      };

    case END_GAME:
      return {
        ...state,
        isStart: false,
        isGameOver: true,
        isPlaying: false,
      };

    case SET_TIME_GAME:
      return {
        ...state,
        time: payload,
      };

    default:
      return state;
  }
}

export default gameReducer;
