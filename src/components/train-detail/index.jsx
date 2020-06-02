import React, { useMemo } from 'react';
import dayjs from 'dayjs';
import css from './index.module.less';

export default function TrainDetail(props) {
  const {
    departDate,
    arriveDate,
    departTimeStr,
    arriveTimeStr,
    trainNumber,
    departStation,
    arriveStation,
    durationStr
  } = props;

  function format(d) {
    const date = dayjs(d);

    return date.format('MM-DD') + ' ' + date.locale('zh-cn').format('ddd');
  }

  const departDateStr = useMemo(() => format(departDate), [departDate]);
  const arriveDateStr = useMemo(() => format(arriveDate), [arriveDate]);

  return (
    <div className={css['train-detail-wrapper']}>
      <div className={css['content']}>
        <div className={css['left']}>
          <p className={css['city']}>{departStation}</p>
          <p className={css['time']}>{departTimeStr}</p>
          <p className={css['date']}>{departDateStr}</p>
        </div>
        <div className={css['middle']}>
          <p className={css['train-name']}>{trainNumber}</p>
          <p className={css['train-mid']}>{props.children}</p>
          <p className={css['train-time']}>耗时{durationStr}</p>
        </div>
        <div className={css['right']}>
          <p className={css['city']}>{arriveStation}</p>
          <p className={css['time']}>{arriveTimeStr}</p>
          <p className={css['date']}>{arriveDateStr}</p>
        </div>
      </div>
    </div>
  );
}
