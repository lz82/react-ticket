import React from 'react';
import classnames from 'classnames';

import Navbar from '@/components/navbar';
import Month from './components/month';

import dayjs from 'dayjs';
import { getDateZero } from '@/utils/format';

import css from './index.module.less';

export default function DateSelector(props) {
  const { title, show, onBack } = props;

  let months = [];

  const today = dayjs();
  const currentMonthFirstDate = getDateZero(today.date(1));

  // 获取当前月和接下来三个月的第一天
  months.push(currentMonthFirstDate);
  months.push(currentMonthFirstDate.add(1, 'month'));
  months.push(currentMonthFirstDate.add(2, 'month'));

  return (
    <div
      className={classnames(css['date-selector-wrapper'], {
        hidden: !show
      })}
    >
      <Navbar title={title} onBack={onBack} />
      <div className={css['month-container']}>
        {months.map((month) => (
          <Month key={month} startDay={month} />
        ))}
      </div>
    </div>
  );
}
