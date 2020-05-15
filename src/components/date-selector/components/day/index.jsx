import React, { useContext } from 'react';
import classnames from 'classnames';

import { dateSelectContext } from '../../index';

import { getDateZero } from '@/utils/format';

import css from './index.module.less';

export default function Day(props) {
  const { day } = props;

  const disabled = day < getDateZero();

  const getDayString = () => {
    if (!day) {
      return '';
    }
    if (day.format('YYYY-MM-DD') === getDateZero().format('YYYY-MM-DD')) {
      return '今天';
    } else {
      return day.date();
    }
  };
  const weekend = day && [0, 6].includes(day.day());

  const handleSelect = useContext(dateSelectContext);

  const onClick = () => {
    if (!day || disabled) {
      return;
    } else {
      handleSelect(day);
    }
  };

  return (
    <td
      className={classnames(css['day-wrapper'], {
        [css['null']]: !day,
        [css['disabled']]: disabled,
        [css['weekend']]: weekend
      })}
      onClick={onClick}
    >
      {getDayString()}
    </td>
  );
}
