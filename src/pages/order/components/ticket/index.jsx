import React from 'react';
import css from './index.module.less';
export default function Ticket(props) {
  const { price, type } = props;
  return (
    <div className={css['ticket-wrapper']}>
      <p>
        <span className={css['type']}>{type}</span>
        <span className={css['price']}>{price}</span>
      </p>
      <div className={css['label']}>坐席</div>
    </div>
  );
}
