import React from 'react';

import dayjs from 'dayjs';

import css from './index.module.less';

export default function DepartureDate() {
  const departDateString = dayjs().format('YYYY-MM-DD');
  const weekString = '周一';
  return (
    <div className={css['departure-date-wrapper']}>
      <input type="hidden" name="date" value={departDateString} />
      {departDateString} <span className={css['depart-week']}>{weekString}</span>
    </div>
  );
}
