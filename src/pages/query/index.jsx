import React, { useCallback, useEffect } from 'react';
import URI from 'urijs';

import Navbar from '@/components/navbar';

import css from './index.module.less';

export default function Query(props) {
  useEffect(() => {
    const { from, to, date, highSpeed } = URI.parseQuery(props.location.search);
    console.log(from, to, date, highSpeed);
  }, []);

  const onBack = useCallback(() => {
    props.history.goBack();
  }, []);

  return (
    <div className={css['query-wrapper']}>
      <Navbar title="查询" onBack={onBack} />
    </div>
  );
}
