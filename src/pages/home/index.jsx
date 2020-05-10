import React, { useCallback } from 'react';
import Navbar from '@/components/navbar';
import Station from './containers/station';
import DepartureDate from './containers/departure-date';
import HighSpeed from './containers/high-speed';
import Btn from './containers/btn';

import css from './index.module.less';

export default function Home(props) {
  const onBack = useCallback(() => {
    props.history.goBack();
  }, []);

  return (
    <div className={css['home-wrapper']}>
      <Navbar title="首页" onBack={onBack} />
      <Station />
      <DepartureDate />
      <HighSpeed />
      <Btn />
    </div>
  );
}
