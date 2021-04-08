import { useCallback, useEffect, useState } from 'react';

const useCountdownTimer = (isPlay, time, callback) => {
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);

  useEffect(() => {
    const start = Date.now();
    setStartTime(start);
  }, []);

  useEffect(() => {
    const { min, sec } = time;
    const end = new Date(0, 0, 0, 0, min, sec, 0);
    setEndTime(end);
  }, [time]);

  const timer = useCallback(() => setInterval(() => {
    const goneTime = startTime - Date.now();
    const timeLeft = endTime - goneTime;
    console.log('timer');

    callback(timeLeft);
  }, 1000), [callback, startTime, endTime]);

  useEffect(() => {
    if (isPlay) {
      timer();
      console.log('eff');
    } else clearInterval(timer);
  }, [isPlay, timer]);
};

export default useCountdownTimer;
