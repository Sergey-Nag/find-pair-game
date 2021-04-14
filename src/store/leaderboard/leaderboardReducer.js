import {
  LOADING_LEADERBOARD,
  LOADED_LEADERBOARD,
  ERROR_LEADERBOARD,
  CLEAR_ERROR_LEADERBOARD,
  PUSH_DATA_LEADERBOARD,
} from './leaderboardTypes';

const initialState = {
  list: [...new Array(20)].map((e, i) => ({
    id: i,
    nickname: `Username ${i}`,
    time: 3000 + (i * 5000),
  })),
  isLoading: false,
  isLoaded: false,
  isError: false,
  errorMessage: null,
};

function leaderboardReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_LEADERBOARD:
      return {
        ...state,
        isLoading: true,
        isLoaded: false,
      };
    case LOADED_LEADERBOARD:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
      };
    case ERROR_LEADERBOARD:
      return {
        ...state,
        isError: true,
        errorMessage: action.payload,
      };
    case CLEAR_ERROR_LEADERBOARD:
      return {
        ...state,
        isError: false,
        errorMessage: null,
      };
    case PUSH_DATA_LEADERBOARD:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
}

export default leaderboardReducer;
