import { useEffect, useState } from 'react';
import { createNicknameValid } from '../utils/helpers';

const useValidation = (value) => {
  const [isValid, setIsValid] = useState(false);
  const [tip, setTip] = useState(null);

  useEffect(() => {
    const { isCorrectlength, isCorrectSymbol, isNotEmpty } = createNicknameValid(value);

    if (isNotEmpty()) {
      setIsValid(true);
    } else {
      setTip('Nickname is required');
      setIsValid(false);
      return;
    }

    if (isCorrectlength()) {
      setIsValid(true);
    } else {
      setTip('Required length of nickname is 3-19 symbols');
      setIsValid(false);
      return;
    }

    if (isCorrectSymbol()) {
      setIsValid(true);
    } else {
      setTip('Nicnkame contains not valid symbols');
      setIsValid(false);
    }
  }, [value]);

  return {
    isValid, tip,
  };
};

export default useValidation;
