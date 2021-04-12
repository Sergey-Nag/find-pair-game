const formatGameTime = (min, sec) => `${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`;

const getMinutesFromMs = (ms) => new Date(ms).getMinutes();
const getSecondsFromMs = (ms) => new Date(ms).getSeconds();

const getMillisecondsFromGameTime = (min, sec) => {
  const time = new Date();

  time.setTime((sec * 1000) + (min * 1000 * 60));

  return time.valueOf();
};

export {
  formatGameTime,
  getMillisecondsFromGameTime,
  getMinutesFromMs,
  getSecondsFromMs,
};
