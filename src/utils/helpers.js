const formatGameTime = (min, sec) => `${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`;

const getMinutesFromMs = (ms) => new Date(ms).getMinutes();
const getSecondsFromMs = (ms) => new Date(ms).getSeconds();

const getMillisecondsFromGameTime = (min, sec) => {
  const time = new Date();

  time.setTime((sec * 1000) + (min * 1000 * 60));

  return time.valueOf();
};

const isPlayerPositionOnEndOfBlock = (playerBlock, containerheight) => {
  const { clientHeight, offsetTop } = playerBlock;

  return (offsetTop + clientHeight) > containerheight;
};

const isNicknameValid = (value) => {
  const isCorrectlength = value.length > 2 && value.length < 25;
  const isCorrectSymbols = !/(')|(")|(`)|(\/)|(\\)|(:)|(;)|(~)|({)|(})|(\()|(\))|(\[)|(\])|(\|)|(,)|(\*)/g.test(value);

  return isCorrectlength && isCorrectSymbols;
};

export {
  formatGameTime,
  getMillisecondsFromGameTime,
  getMinutesFromMs,
  getSecondsFromMs,
  isPlayerPositionOnEndOfBlock,
  isNicknameValid,
};
