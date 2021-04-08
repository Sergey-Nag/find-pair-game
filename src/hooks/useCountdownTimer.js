import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { getMillisecondsFromGameTime } from '../utils/helpers';

// const timer = new Timer();

const useCountdownTimer = (isPlay, time, callback, interval = 1000) => {
  // const timerRef = useRef(null);
  const [timerRef, setTimerRef] = useState(null);
  const [leftTime, setLeftTime] = useState(getMillisecondsFromGameTime(time));

  const tick = useCallback(() => {
    callback(leftTime);

    setTimerRef(setTimeout(tick, interval));

    const second = getMillisecondsFromGameTime({ min: 0, sec: 1 });
    setLeftTime(leftTime - second);
  }, [callback, interval, leftTime]);

  const clearTimerRef = useCallback(() => {
    if (!timerRef) return;

    clearTimeout(timerRef);
    setTimerRef(null);
    // timerRef.current = null;
  }, [timerRef]);

  const start = useCallback(() => {
    if (timerRef) return;

    setTimerRef(setTimeout(tick, interval));
  }, [interval, tick, timerRef]);

  useEffect(() => {
    // start();
    // clearTimerRef();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlay]);
};

export default useCountdownTimer;
