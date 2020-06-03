import React from 'react';

import css from './index.module.less';

export default function Candidate(props) {
  const { candidate } = props;
  console.log(candidate);
  return <div className={css['candidate-wrapper']}>candidate</div>;
}
