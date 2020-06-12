import React, { useMemo } from 'react';
import Passenger from './passenger';

import css from './index.module.less';
export default function Passengers(props) {
  const {
    passengers,
    addAdult,
    addChild,
    removePassenger,
    updatePassenger,
    showTicketTypeMenu,
    showGenderMenu,
    showFollowAdultMenu
  } = props;

  const nameMap = useMemo(() => {
    let ret = {};
    passengers.forEach((item) => {
      ret[item.id] = item.name;
    });
    return ret;
  }, [passengers]);

  return (
    <div className={css['passenger-wrapper']}>
      <ul>
        {passengers.map((passenger) => {
          return (
            <Passenger
              {...passenger}
              followAdultName={nameMap[passenger.followAdult]}
              showTicketTypeMenu={showTicketTypeMenu}
              showGenderMenu={showGenderMenu}
              showFollowAdultMenu={showFollowAdultMenu}
              onRemove={removePassenger}
              onUpdate={updatePassenger}
              key={passenger.id}
            />
          );
        })}
      </ul>
      <section className={css['add']}>
        <div className={css['adult']} onClick={addAdult}>
          添加成人
        </div>
        <div className={css['child']} onClick={addChild}>
          添加儿童
        </div>
      </section>
    </div>
  );
}
