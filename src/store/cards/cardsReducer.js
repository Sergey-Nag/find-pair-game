import {
  PUSH_DATA_CARDS,
  ADD_TO_COMPARE_CARDS,
  FLIP_CARD,
} from './cardsTypes';

const initialState = {
  compare: [],
  list: [
    {
      id: 1,
      name: 'android',
      isFlipped: false,
    },
    {
      id: 2,
      name: 'acer',
      isFlipped: false,
    },
    {
      id: 3,
      name: 'lenovo',
      isFlipped: false,
    },
    {
      id: 4,
      name: 'android',
      isFlipped: false,
    },
    {
      id: 5,
      name: 'acer',
      isFlipped: false,
    },
    {
      id: 6,
      name: 'lenovo',
      isFlipped: false,
    },
    {
      id: 7,
      name: 'beats',
      isFlipped: false,
    },
    {
      id: 8,
      name: 'cisco',
      isFlipped: false,
    },
    {
      id: 9,
      name: 'apple',
      isFlipped: false,
    },
    {
      id: 10,
      name: 'beats',
      isFlipped: false,
    },
    {
      id: 11,
      name: 'cisco',
      isFlipped: false,
    },
    {
      id: 12,
      name: 'apple',
      isFlipped: false,
    },
    {
      id: 13,
      name: 'apple',
      isFlipped: false,
    },
    {
      id: 14,
      name: 'beats',
      isFlipped: false,
    },
    {
      id: 15,
      name: 'cisco',
      isFlipped: false,
    },
    {
      id: 16,
      name: 'apple',
      isFlipped: false,
    },
  ],
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
