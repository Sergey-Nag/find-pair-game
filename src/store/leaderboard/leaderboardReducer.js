import {
  LOADING_LEADERBOARD,
  LOADED_LEADERBOARD,
  ERROR_LEADERBOARD,
  CLEAR_ERROR_LEADERBOARD,
  PUSH_DATA_LEADERBOARD,
} from './leaderboardTypes';

const initialState = {
  list: [
    {
      id: '1',
      nickname: 'Username',
      time: 60000,
    },
    {
      id: '3',
      nickname: 'nick',
      time: 90000,
    },
    {
      id: '2',
      nickname: 'user',
      time: 95000,
    },
    {
      id: '4',
      nickname: 'nickName',
      time: 108000,
    },
    {
      id: '5',
      nickname: '_nickname_123',
      time: 119000,
    },
    {
      id: '6',
      nickname: 'asd',
      time: 132000,
    },
  ],
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
