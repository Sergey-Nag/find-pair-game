import easyImage from '../assets/img/gamemode-images/easy.svg';
import mediumImage from '../assets/img/gamemode-images/medium.svg';
import hardImage from '../assets/img/gamemode-images/hard.svg';

const gameLevelData = {
  easy: {
    img: easyImage,
    time: '01:00',
    layout: '4x4',
  },
  medium: {
    img: mediumImage,
    time: '02:20',
    layout: '8x8',
  },
  hard: {
    img: hardImage,
    time: '03:50',
    layout: '14x10',
  },
};

export default gameLevelData;
