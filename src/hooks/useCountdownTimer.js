import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { getMillisecondsFromGameTime } from '../utils/helpers';

// const timer = new Timer();

const useCountdownTimer = (isPlay, time, callback, interval = 1000) => {
  const timerRef = useRef(null);
  const [leftTime, setLeftTime] = useState(0);
  const second = getMillisecondsFromGameTime({ min: 0, sec: 1 });

  useEffect(() => {
    setLeftTime(getMillisecondsFromGameTime(time));
  }, [time]);

  const tick = useCallback(() => {
    callback(leftTime);

    if (isPlay) timerRef.current = setTimeout(tick, interval);

    const res = () => second - leftTime;
    setLeftTime(res());
  }, [isPlay, callback, interval, leftTime, second]);

  const clearTimerRef = useCallback(() => {
    if (!timerRef.current) return;

    clearTimeout(timerRef.current);
    timerRef.current = null;
    setLeftTime(getMillisecondsFromGameTime(time));
  }, [time]);

  const start = useCallback(() => {
    if (timerRef.current) return;

    timerRef.current = setTimeout(tick, interval);
  }, [interval, tick]);

  useEffect(() => {
    start();
    if (!isPlay) clearTimerRef();
  }, [isPlay, start, clearTimerRef]);
};

export default useCountdownTimer;
