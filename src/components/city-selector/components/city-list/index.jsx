import React, { memo } from 'react';
import PropTypes from 'prop-types';

import CitySection from '../city-section';

import css from './index.module.less';

function CityList(props) {
  const { sections } = props;

  return (
    <div className={css['city-list-wrapper']}>
      <div className={css['city-cate']}>
        {sections.map((section) => {
          return section.citys ? (
            <CitySection key={section.title} title={section.title} cities={section.citys} />
          ) : null;
        })}
      </div>
    </div>
  );
}

CityList.propTypes = {
  sections: PropTypes.array.isRequired
};

export default memo(CityList);
