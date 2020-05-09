import React from 'react';
import Navbar from '@/components/navbar';
import Station from './containers/station';
import DepartureDate from './containers/departure-date';
import HighSpeed from './containers/high-speed';
import Btn from './containers/btn';

import css from './index.module.less';

export default function Home() {
  return (
    <div className={css['home-wrapper']}>
      <Navbar />
      <Station />
      <DepartureDate />
      <HighSpeed />
      <Btn />
    </div>
  );
}
