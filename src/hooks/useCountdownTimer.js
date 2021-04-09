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
  const [isPlaying, setIsPlaying] = useState(false);
  const [initialValue, setInitialValue] = useState(getMillisecondsFromGameTime(min, sec));
  const [leftTime, setLeftTime] = useState(initialValue);

  const startTimer = useCallback(() => {
    if (timerRef.current) return;

    timerRef.current = setInterval(() => setLeftTime((time) => time - 1000), interval);
  }, [interval]);

  const stopTimer = () => {
    if (!timerRef.current) return;

    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const resetTimer = useCallback(() => {
    setLeftTime(initialValue);
  }, [initialValue]);

  useEffect(() => {
    if (isOver) {
      stopTimer();
      resetTimer();
      return false;
    }

    if (isPlaying) startTimer();
    else stopTimer();

    return () => stopTimer();
  }, [isOver, isPlaying, startTimer, resetTimer]);

  return {
    start: () => {
      setIsOver(false);
      setIsPlaying(true);
    },
    pause: () => setIsPlaying(false),
    stop: () => setIsOver(true),
    restart: (newTime) => {
      setIsOver(true);
      if (newTime) setInitialValue(newTime);
    },
    leftTime,
  };
};

export default useCountdownTimer;
