import React from 'react';

import css from './index.module.less';

export default function Navbar(props) {
  const { title, onBack } = props;
  return (
    <div className={css['navbar-wrapper']}>
      <div className={css['back']} onClick={onBack}>
        {/* <svg width="42" height="42">
          <polyline points="25,13 16,21 25,29" stroke="#fff" strokeWidth="2" fill="none" />
        </svg> */}
        返回
      </div>
      <h1 className={css['title"']}>{title || '标题'}</h1>
    </div>
  );
}
