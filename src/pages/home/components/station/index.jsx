import React from 'react';
import css from './index.module.less';

export default function Station(props) {
  const { from, to, showCitySelector, exchangeFromTo } = props;

  return (
    <div className={css['station-wrapper']}>
      <div className={css['station']} onClick={() => showCitySelector('from')}>
        <input
          type="text"
          readOnly
          name="from"
          value={from}
          className={[css['input'], css['from']].join(' ')}
        />
      </div>
      <div className={css['switch']} onClick={() => exchangeFromTo()}>
        <i className="iconfont icon-qiehuan" />
      </div>
      <div className={css['station']} onClick={() => showCitySelector('to')}>
        <input
          type="text"
          readOnly
          name="to"
          value={to}
          className={[css['input'], css['to']].join(' ')}
        />
      </div>
    </div>
  );
}
