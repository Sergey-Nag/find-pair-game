import {
  START_GAME,
  PAUSE_GAME,
  RESUME_GAME,
  END_GAME,
  SET_TIME_GAME,
} from './gameTypes';

const initialState = {
  isPlaying: false,
  isPause: false,
  isGameOver: false,
  time: null,
};

function gameReducer(state = initialState, { type, payload }) {
  switch (type) {
    case START_GAME:
      console.log('start');
      return {
        ...state,
        isPlaying: true,
      };
    case PAUSE_GAME:
      return {
        ...state,
        isPlaying: false,
        isPause: true,
      };

    case RESUME_GAME:
      return {
        ...state,
        isPause: false,
        isPlaying: true,
      };

    case END_GAME:
      return {
        ...state,
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
