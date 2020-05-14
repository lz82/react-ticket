import React from 'react';
import dayjs from 'dayjs';
import Week from '../week';
import css from './index.module.less';

export default function Month(props) {
  const { startDay } = props;

  let days = [startDay];
  let nextDay = dayjs(startDay).add(1, 'day');

  while (startDay.month() === nextDay.month()) {
    days.push(nextDay);
    nextDay = nextDay.add(1, 'day');
  }

  const firstWeek = startDay.day();
  console.log(firstWeek);
  const unshiftCnt = firstWeek > 0 ? firstWeek - 1 : 6;
  for (let i = 0; i < unshiftCnt; i++) {
    days.unshift(null);
  }
  const lastWeek = days[days.length - 1].day();
  const pushCnt = lastWeek > 0 ? 7 - lastWeek : 0;
  for (let i = 0; i < pushCnt; i++) {
    days.push(null);
  }

  let weeks = [];

  for (let row = 0; row < days.length / 7; row++) {
    const week = days.slice(row * 7, (row + 1) * 7);
    weeks.push(week);
  }

  return (
    <div className={css['month-wrapper']}>
      <table className={css['date-table']}>
        <thead>
          <tr>
            <td colSpan="7">
              <h5>
                {startDay.year()}年{startDay.month() + 1}月
              </h5>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr className={css['date-table-weeks']}>
            <th>周一</th>
            <th>周二</th>
            <th>周三</th>
            <th>周四</th>
            <th>周五</th>
            <th className={css['weekend']}>周六</th>
            <th className={css['weekend']}>周日</th>
          </tr>
          {weeks.map((week, idx) => {
            return <Week key={idx} days={week} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
