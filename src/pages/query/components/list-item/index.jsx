import React, { memo } from 'react';
import classnames from 'classnames';
import css from './index.module.less';

const TrainListItem = memo(function (props) {
  const { dTime, aTime, dStation, aStation, trainNumber, date, time, priceMsg, dayAfter } = props;
  const url = date;
  return (
    <li className={css['train-list-item-wrapper']}>
      <a href={url}>
        <span className={css['item-time']}>
          <em>{dTime}</em>
          <br />
          <em className={css['em-light']}>
            {aTime} <i className={css['time-after']}>{dayAfter}</i>
          </em>
        </span>
        <span className={css['item-stations']}>
          <em>
            <i className={classnames(css['train-station'], css['train-start'])}>始</i>
            {dStation}
          </em>
          <br />
          <em className={css['em-light']}>
            <i className={classnames(css['train-station'], css['train-end'])}>终</i>
            {aStation}
          </em>
        </span>
        <span className={css['item-train']}>
          <em>{trainNumber}</em>
          <br />
          <em className={css['em-light']}>{time}</em>
        </span>
        <span className={css['item-ticket']}>
          <em>{priceMsg}</em>
          <br />
          <em className={css['em-light-orange']}>可抢票</em>
        </span>
      </a>
    </li>
  );
});

export default TrainListItem;
