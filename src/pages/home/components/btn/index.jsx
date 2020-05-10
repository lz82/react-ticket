import React from 'react';

import css from './index.module.less';

export default function Btn() {
  return (
    <div className={css['btn-wrapper']}>
      <button type="submit" className={css['btn']}>
        {' '}
        搜索{' '}
      </button>
    </div>
  );
}
