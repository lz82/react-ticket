import React, { useState, useEffect } from 'react';

import { commonApi } from '@/services';

import css from './index.module.less';

export default function Schedule(props) {
  const [scheduleList, setScheduleList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await commonApi.querySchedule();
        setScheduleList(res);
        console.log(scheduleList);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={css['schedule-wrapper']}>
      <div className={css['dialog']}>
        <h1>列车时刻表</h1>
        <div className={css['head']}>
          <span className={css['station']}>车站</span>
          <span className={css['deptime']}>到达</span>
          <span className={css['arrtime']}>发车</span>
          <span className={css['stoptime']}>停留时间</span>
        </div>
        <ul>
          {scheduleList.map((schedule, index) => (
            <li key={index}>
              <div className={css['icon']}>{(index + 1).toString().padStart(2, '0')}</div>
              <div className={css['row']}>
                <span className={css['station']}>{schedule.station}</span>
                <span className={css['arrtime']}>
                  {schedule.arriveTime ? schedule.arriveTime : '始发站'}
                </span>
                <span className={css['deptime']}>
                  {schedule.departTime ? schedule.departTime : '终到站'}
                </span>
                <span className={css['stoptime']}>
                  {schedule.stay ? schedule.stay + '分' : '-'}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
