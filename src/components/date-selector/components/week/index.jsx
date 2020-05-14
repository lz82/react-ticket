import React from 'react';
import Day from '../day';
import css from './index.module.less';

export default function Week(props) {
  const { days, onSelect } = props;
  console.log(days);
  return (
    <tr className={css['date-table-days']}>
      {days.map((day, idx) => {
        return <Day key={idx} day={day} onSelect={onSelect} />;
      })}
    </tr>
  );
}
