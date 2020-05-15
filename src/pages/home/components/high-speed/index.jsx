import React from 'react';
import classnames from 'classnames';

import css from './index.module.less';

export default function HighSpeed(props) {
  const { highSpeed, toggle } = props;
  return (
    <div className={css['high-speed-wrapper']}>
      <div className={css['label']}>只看高铁/动车</div>
      <div className={css['switch-wrapper']} onClick={() => toggle()}>
        <input type="hidden" name="highSpeed" value={highSpeed} />
        <div
          className={classnames(css['track'], {
            [css['checked']]: highSpeed
          })}
        >
          <span
            className={classnames(css['handle'], {
              [css['checked']]: highSpeed
            })}
          />
        </div>
      </div>
    </div>
  );
}
