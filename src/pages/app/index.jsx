import React from 'react';

import css from './index.module.less';

export default function App(props) {
  return <div className={css['app-wrapper']}>{props.children}</div>;
}
