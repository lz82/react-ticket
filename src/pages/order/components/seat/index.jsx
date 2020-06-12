import React from 'react';
import classnames from 'classnames';

import css from './index.module.less';

export default function Seat(props) {
  const { passengers, updatePassenger } = props;

  function createSeat(seatType) {
    return (
      <div>
        {passengers.map((passenger) => {
          return (
            <p
              key={passenger.id}
              className={classnames([css['seat']], {
                [css['active']]: passenger.seat === seatType
              })}
              data-text={seatType}
              onClick={() =>
                updatePassenger(passenger.id, {
                  seat: seatType
                })
              }
            >
              &#xe02d;
            </p>
          );
        })}
      </div>
    );
  }

  return (
    <div className={css['choose']}>
      <p className={css['tip']}>在线选座</p>
      <div className={css['container']}>
        <div className={css['seats']}>
          <div>窗</div>
          {createSeat('A')}
          {createSeat('B')}
          {createSeat('C')}
          <div>过道</div>
          {createSeat('D')}
          {createSeat('F')}
          <div>窗</div>
        </div>
      </div>
    </div>
  );
}
