import React, { memo } from 'react';

import PropTypes from 'prop-types';

import CityItem from '../city-item';

import css from './index.module.less';

function CitySection(props) {
  const { title, cities } = props;

  return (
    <div className={css['city-section-wrapper']}>
      <ul className={css['city-ul']}>
        <li className={css['city-li']} key="title" data-cate={title}>
          {title}
        </li>
        {cities.map((city) => {
          return <CityItem key={city.name} name={city.name} />;
        })}
      </ul>
    </div>
  );
}

CitySection.propTypes = {
  title: PropTypes.string.isRequired,
  cities: PropTypes.array.isRequired
};

export default memo(CitySection);
