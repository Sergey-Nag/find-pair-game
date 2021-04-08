const formatGameTime = (min, sec) => `${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`;

const getMillisecondsFromGameTime = ({ min, sec }) => {
  const time = new Date();

  time.setSeconds(time.getSeconds() + sec + min * 60);

  return time;
};

export { formatGameTime, getMillisecondsFromGameTime };
