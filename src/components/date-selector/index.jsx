import React from 'react';
import classnames from 'classnames';

import Navbar from '@/components/navbar';

import css from './index.module.less';

export default function DateSelector(props) {
  const { title, show, onBack } = props;

  return (
    <div
      className={classnames(css['date-selector-wrapper'], {
        hidden: !show
      })}
    >
      <Navbar title={title} onBack={onBack} />
    </div>
  );
}
