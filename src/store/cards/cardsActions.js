import {
  FLIP_CARD,
} from './cardsTypes';

const flipCard = (index) => {
  const updateArr = (arr) => {
    const copiedArr = [...arr];

    copiedArr[index].isFlipped = !copiedArr[index].isFlipped;

    return copiedArr;
  };

  return {
    type: FLIP_CARD,
    payload: updateArr,
  };
};

const a = null;

export { a, flipCard };
