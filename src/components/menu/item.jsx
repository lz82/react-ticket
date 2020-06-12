import React from 'react';
import classnames from 'classnames';
import css from './index.module.less';

export default function MenuItem(props) {
  const { onPress, title, value, active } = props;

  const onClick = () => {
    console.log('on item click', value, onPress);
    onPress(value);
  };

  return (
    <li className={classnames({ [css['active']]: active })} onClick={onClick}>
      {title}
    </li>
  );
}
