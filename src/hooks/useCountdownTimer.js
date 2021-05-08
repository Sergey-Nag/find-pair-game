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
  const [isTimeIsZero, setTimeIsZero] = useState(false);
  const [isReset, setIsReset] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [initialValue, setInitialValue] = useState(getMillisecondsFromGameTime(min, sec));
  const [leftTime, setLeftTime] = useState(initialValue);
  const [callbacks] = useState({
    paused: null, finished: null,
  });

  useEffect(() => {
    setTimeIsZero(leftTime === 0);
  }, [leftTime]);

  const start = () => {
    setIsOver(false);
    setIsPlaying(true);
  };
  const restart = (newTime) => {
    setIsPlaying(false);
    setIsOver(true);

    if (!newTime) return;

    setInitialValue(getMillisecondsFromGameTime(newTime[0], newTime[1]));
    setIsReset(true);
  };
  const pause = () => setIsPlaying(false);
  const stop = () => setIsOver(true);

  const startTimer = useCallback(() => {
    if (timerRef.current) return;
    if (callbacks.beforeStart) callbacks.beforeStart();

    timerRef.current = setInterval(() => {
      setLeftTime((time) => {
        if (time === 0) {
          restart();
          return 0;
        }

        return time - 1000;
      });
    }, interval);
  }, [interval, callbacks]);

  const stopTimer = useCallback(() => {
    if (!timerRef.current) return;

    clearInterval(timerRef.current);
    timerRef.current = null;
    setIsPlaying(false);

    if (!isOver && callbacks.paused && !isTimeIsZero) callbacks.paused();
  }, [callbacks, isOver, isTimeIsZero]);

  const resetTimer = useCallback(() => {
    setLeftTime(initialValue);
  }, [initialValue]);

  useEffect(() => {
    if (isReset) {
      resetTimer();
      setIsReset(false);
    }

    if (isOver) {
      stopTimer();
      if (callbacks.finished && isTimeIsZero) callbacks.finished();
      return false;
    }

    if (isPlaying) startTimer();
    else stopTimer();

    return () => stopTimer();
  }, [
    isOver,
    isReset,
    isPlaying,
    startTimer,
    resetTimer,
    callbacks,
    stopTimer,
    isTimeIsZero,
  ]);

  return {
    start,
    pause,
    stop,
    restart,
    leftTime,
    callbacks,
  };
};

export default useCountdownTimer;
