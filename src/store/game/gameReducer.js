import {
  START_GAME,
  PAUSE_GAME,
  END_GAME,
  SET_TIME_GAME,
} from './gameTypes';

const initialState = {
  isStart: false,
  isPlaying: false,
  isPause: false,
  isGameOver: false,
  time: null,
};

function gameReducer(state = initialState, { type, payload }) {
  switch (type) {
    case START_GAME:
      return {
        ...state,
        isStart: true,
        isPlaying: true,
        isPause: false,
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
