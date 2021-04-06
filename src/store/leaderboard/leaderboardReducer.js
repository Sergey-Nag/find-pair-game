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
      id: 1,
      nickname: 'Username',
      time: 1327536135417,
    },
    {
      id: 3,
      nickname: 'nick',
      time: 1327536265417,
    },
    {
      id: 2,
      nickname: 'user',
      time: 1327536140417,
    },
    {
      id: 4,
      nickname: 'nickName',
      time: 1327536161417,
    },
    {
      id: 5,
      nickname: '_nickname_123',
      time: 1327536177417,
    },
    {
      id: 6,
      nickname: 'asd',
      time: 1327536196417,
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
