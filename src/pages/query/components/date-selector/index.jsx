import React from 'react';
import classnames from 'classnames';
import css from './index.module.less';

export default function DateSelector(props) {
  const { currentDate, isPrevDisabled, isNextDisabled, prev, next } = props;
  return (
    <div className={css['date-selector-wrapper']}>
      <span
        onClick={prev}
        className={classnames(css['nav-prev'], {
          [css['nav-disabled']]: isPrevDisabled
        })}
      >
        前一天
      </span>
      <span className={css['nav-current']}>{currentDate}</span>
      <span
        onClick={next}
        className={classnames(css['nav-next'], {
          [css['nav-disabled']]: isNextDisabled
        })}
      >
        后一天
      </span>
    </div>
  );
}
