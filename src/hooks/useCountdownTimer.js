import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { getMillisecondsFromGameTime } from '../utils/helpers';

const useCountdownTimer = ([min, sec], interval) => {
  const timerRef = useRef(null);
  const [isOver, setIsOver] = useState(false);
  const [isReset, setIsReset] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [initialValue, setInitialValue] = useState(getMillisecondsFromGameTime(min, sec));
  const [leftTime, setLeftTime] = useState(initialValue);
  const [callbacks] = useState({
    beforeStart: null, finished: null,
  });

  const startTimer = useCallback(() => {
    if (timerRef.current) return;
    if (callbacks.beforeStart) callbacks.beforeStart();

    timerRef.current = setInterval(() => {
      setLeftTime((time) => {
        if (time === 0) {
          setIsOver(true);
          setIsReset(true);
          return 0;
        }

        return time - 1000;
      });
    }, interval);
  }, [interval, callbacks]);

  const stopTimer = () => {
    if (!timerRef.current) return;

    clearInterval(timerRef.current);
    timerRef.current = null;
    setIsPlaying(false);
  };

  const resetTimer = useCallback(() => {
    setLeftTime(initialValue);
  }, [initialValue]);

  useEffect(() => {
    if (isOver) {
      stopTimer();
      if (callbacks.finished) callbacks.finished();
      return false;
    }

    if (isReset) {
      resetTimer();
      setIsReset(false);
    }

    if (isPlaying) startTimer();
    else stopTimer();

    return () => stopTimer();
  }, [isOver, isReset, isPlaying, startTimer, resetTimer, callbacks]);

  return {
    start: () => {
      setIsOver(false);
      setIsPlaying(true);
    },
    pause: () => setIsPlaying(false),
    stop: () => setIsOver(true),
    restart: (newTime) => {
      setIsPlaying(false);
      setIsOver(true);

      if (!newTime) return;
      setInitialValue(getMillisecondsFromGameTime(newTime[0], newTime[1]));
      setIsReset(true);
    },
    leftTime,
    callbacks,
  };
};

export default useCountdownTimer;
