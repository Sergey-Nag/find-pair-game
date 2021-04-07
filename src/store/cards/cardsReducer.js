import {
  PUSH_DATA_CARDS,
  ADD_TO_COMPARE_CARDS,
  FLIP_CARD,
} from './cardsTypes';

const initialState = {
  compare: [],
  list: [...new Array(64)].map((el, i) => ({
    id: i,
    name: 'android',
    isFlipped: false,
  })),
};

function cardsReducer(state = initialState, action) {
  switch (action.type) {
    case PUSH_DATA_CARDS:
      return {
        ...state,
        list: action.payload,
      };
    case FLIP_CARD:
      return {
        ...state,
        list: action.payload(state.list),
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
