import React, { useState } from 'react';
import URI from 'urijs';
import dayjs from 'dayjs';
import css from './index.module.less';

export default function Candidate(props) {
  const { candidate, trainNumber, departStation, arriveStation, departDate } = props;

  const [expandIdx, setExpandIdx] = useState(-1);

  const onToggle = (index) => {
    setExpandIdx(expandIdx === index ? -1 : index);
  };

  const onBtnClick = (index, e) => {
    e.stopPropagation();
    setExpandIdx(expandIdx === index ? -1 : index);
  };

  return (
    <ul className={css['candidate-wrapper']}>
      {candidate.map((item, index) => {
        return (
          <li key={item.type}>
            <div className={css['bar']} onClick={() => onToggle(index)}>
              <span className={css['seat']}>{item.type}</span>
              <span className={css['price']}>
                <i>￥</i>
                {item.priceMsg}
              </span>
              <span className={css['btn']} onClick={(e) => onBtnClick(index, e)}>
                {expandIdx !== index ? '预订' : '收起'}
              </span>
              <span className={css['num']}>{item.ticketsLeft}</span>
            </div>
            <div
              className={css['channels']}
              style={{ height: expandIdx === index ? item.channels.length * 55 + 'px' : 0 }}
            >
              {item.channels.map((channel) => {
                const src = new URI('/order')
                  .setSearch('trainNumber', trainNumber)
                  .setSearch('dStation', departStation)
                  .setSearch('aStation', arriveStation)
                  .setSearch('type', item.type)
                  .setSearch('date', dayjs(departDate).format('YYYY-MM-DD'))
                  .toString();
                console.log(src);
                return (
                  <div key={channel.name} className={css['channel']}>
                    <div className={css['middle']}>
                      <div className={css['name']}>{channel.name}</div>
                      <div className={css['desc']}>{channel.desc}</div>
                    </div>
                    <a href={src} className={css['buy-wrapper']}>
                      <div className={css['buy']}>买票</div>
                    </a>
                  </div>
                );
              })}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
