import React from 'react';
import classnames from 'classnames';

import MenuItem from './item';

import css from './index.module.less';

export default function Menu(props) {
  const { show, options, onPress, hideMenu } = props;
  return (
    <div className={css['menu-wrapper']}>
      {show && <div className={css['mask']} onClick={() => hideMenu()} />}
      <div className={classnames([css['menu']], { show })}>
        <div className={css['title']} />
        <ul>
          {options &&
            options.map((option) => {
              console.log('option', option);
              return <MenuItem key={option.value} {...option} onPress={onPress} />;
            })}
        </ul>
      </div>
    </div>
  );
}
