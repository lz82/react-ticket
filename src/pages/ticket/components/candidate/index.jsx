import React from 'react';

import css from './index.module.less';

export default function Candidate(props) {
  const { candidates } = props;
  return <div className={css['candidate-wrapper']}>candidate</div>;
}
