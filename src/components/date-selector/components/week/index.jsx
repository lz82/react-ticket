import React from 'react';
import PropTypes from 'prop-types';
import Day from '../day';
import css from './index.module.less';

export default function Week(props) {
  const { days } = props;
  return (
    <tr className={css['date-table-days']}>
      {days.map((day, idx) => {
        return <Day key={idx} day={day} />;
      })}
    </tr>
  );
}

Week.propTypes = {
  days: PropTypes.array.isRequired
};
