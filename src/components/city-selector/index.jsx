import React, { useState } from 'react';
import classnames from 'classnames';

import css from './index.module.less';

export default function CitySelector(props) {
  const { onBack, show } = props;

  const [searchKey, setSearchKey] = useState('');

  return (
    <div
      className={classnames(css['city-selector-wrapper'], {
        hidden: !show
      })}
    >
      <div className={css['search-bar']}>
        <div className={css['back']} onClick={() => onBack()}>
          <svg width="42" height="42">
            <polyline points="25,13 16,21 25,29" stroke="#fff" strokeWidth="2" fill="none" />
          </svg>
        </div>
        <div className={css['input-wrapper']}>
          <input
            type="text"
            value={searchKey}
            className={css['input']}
            placeholder="城市、车站的中文或拼音"
            onChange={(e) => setSearchKey(e.target.value)}
          />
          <i
            onClick={() => setSearchKey('')}
            className={classnames('iconfont', 'icon-clear', css['clear'], {
              hidden: searchKey.length === 0
            })}
          />
        </div>
      </div>
    </div>
  );
}
