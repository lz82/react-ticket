import React, { useMemo } from 'react';

import { getWeek, getDate } from '@/utils/format';

import css from './index.module.less';

const week = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];

export default function DepartureDate(props) {
  const { departDate, onClick } = props;
  const weekString = week[getWeek(departDate) - 1];
  console.log('weekstring', departDate, weekString);
  const today = getDate();

  const outputWeek = useMemo(() => {
    if (departDate === today) {
      return <span className={css['depart-week']}>{weekString}(今天)</span>;
    } else {
      return <span className={css['depart-week']}>{weekString}</span>;
    }
  }, [departDate]);

  return (
    <div className={css['departure-date-wrapper']} onClick={onClick}>
      <input type="hidden" name="date" value={departDate} />
      {departDate}
      {outputWeek}
    </div>
  );
}
