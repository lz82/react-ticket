import React from 'react';
import css from './index.module.less';
export default function Group(props) {
  const { title } = props;
  return (
    <div className={css['group-wrapper']}>
      <h3>{title}</h3>
      <ul>{props.children}</ul>
    </div>
  );
}
