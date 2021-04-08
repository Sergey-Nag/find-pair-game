const formatGameTime = (min, sec) => `${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`;

const getMillisecondsFromGameTime = ({ min, sec }) => new Date(0, 0, 0, 0, min, sec, 0).valueOf();

export { formatGameTime, getMillisecondsFromGameTime };
