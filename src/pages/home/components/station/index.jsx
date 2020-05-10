import React from 'react';

import css from './index.module.less';

export default function Station(props) {
  const { from, to, exchangeFromTo, showCitySelector } = props;
  return (
    <div className={css['station-wrapper']}>
      <div className={css['station']} onClick={() => showCitySelector(true)}>
        <input
          type="text"
          readOnly
          name="from"
          value={from || '上海'}
          className={[css['input'], css['from']].join(' ')}
        />
      </div>
      <div className={css['switch']} onClick={() => exchangeFromTo()}>
        <i className="iconfont icon-qiehuan" />
      </div>
      <div className={css['station']} onClick={() => showCitySelector(false)}>
        <input
          type="text"
          readOnly
          name="to"
          value={to || '北京'}
          className={[css['input'], css['to']].join(' ')}
        />
      </div>
    </div>
  );
}
