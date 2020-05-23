import { useMemo } from 'react';
import { getFormatDate, getLocalWeek, getDateZero, getDate } from '@/utils/format';

export default (date, prev, next) => {

  const currentString = useMemo(() => {
    return `${getFormatDate(date, 'MM月DD日')} ${getLocalWeek(date)}`;
  }, [date]);

  const isPrevDisabled = useMemo(() => {
    const today = getDateZero();
    return getDateZero(date) <= today;
  }, [date]);

  const isNextDisabled = useMemo(() => {
    const today = getDateZero();
    return getDateZero(date) >= today.add(20, 'd');
  }, [date]);

  const handlePrevClick = () => {
    if (!isPrevDisabled) {
      const newDate = getDate(getDateZero(date).add(-1, 'd'));
      prev(newDate);
    }
  };

  const handleNextClick = () => {
    if (!isNextDisabled) {
      const newDate = getDate(getDateZero(date).add(1, 'd'));
      next(newDate);
    }
  };

  return {
    currentString,
    isPrevDisabled,
    isNextDisabled,
    handlePrevClick,
    handleNextClick
  };
};
