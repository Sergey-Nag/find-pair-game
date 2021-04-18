import easyImage from '../assets/img/gamemode-images/easy.svg';
import mediumImage from '../assets/img/gamemode-images/medium.svg';
import hardImage from '../assets/img/gamemode-images/hard.svg';

const gameLevelData = {
  easy: {
    img: easyImage,
    time: [1, 0],
    layout: '4x4',
    rememberTime: [0, 10],
  },
  medium: {
    img: mediumImage,
    time: [2, 20],
    layout: '8x8',
    rememberTime: [0, 30],
  },
  hard: {
    img: hardImage,
    time: [3, 50],
    layout: '14x10',
    rememberTime: [0, 50],
  },
};

export default gameLevelData;
