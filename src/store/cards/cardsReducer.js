import {
  PUSH_DATA_CARDS,
  ADD_TO_COMPARE_CARDS,
} from './cardsTypes';

const initialState = {
  compare: [],
  list: [],
};

function cardsReducer(state = initialState, action) {
  switch (action.type) {
    case PUSH_DATA_CARDS:
      return {
        ...state,
        list: action.payload,
      };
    case ADD_TO_COMPARE_CARDS:
      return {
        ...state,
        compare: [...action.payload(state.compare)],
      };
    default:
      return state;
  }
}

export default cardsReducer;
