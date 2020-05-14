import React from 'react';
import classnames from 'classnames';

import { getDateZero } from '@/utils/format';

import css from './index.module.less';

export default function Day(props) {
  const { day, onSelect } = props;

  const disabled = day < getDateZero();

  const getDayString = () => {
    if (!day) {
      return '';
    }
    console.log('today', day, getDateZero());
    if (day.format('YYYY-MM-DD') === getDateZero().format('YYYY-MM-DD')) {
      return '今天';
    } else {
      return day.date();
    }
  };
  const weekend = day && [0, 6].includes(day.day());

  return (
    <td
      className={classnames(css['day-wrapper'], {
        [css['null']]: !day,
        [css['disabled']]: disabled,
        [css['weekend']]: weekend
      })}
      onClick={onSelect}
    >
      {getDayString()}
    </td>
  );
}
