import React, { memo } from 'react';
import classnames from 'classnames';
import useDateNav from '@/hooks/use-date-nav';

import css from './index.module.less';

const DateNav = memo(function (props) {
  const { date, prev, next } = props;

  const {
    currentString,
    isPrevDisabled,
    isNextDisabled,
    handlePrevClick,
    handleNextClick
  } = useDateNav(date, prev, next);

  return (
    <div className={css['date-selector-wrapper']}>
      <span
        onClick={handlePrevClick}
        className={classnames(css['nav-prev'], {
          [css['nav-disabled']]: isPrevDisabled
        })}
      >
        前一天
      </span>
      <span className={css['nav-current']}>{currentString}</span>
      <span
        onClick={handleNextClick}
        className={classnames(css['nav-next'], {
          [css['nav-disabled']]: isNextDisabled
        })}
      >
        后一天
      </span>
    </div>
  );
});

export default DateNav;
