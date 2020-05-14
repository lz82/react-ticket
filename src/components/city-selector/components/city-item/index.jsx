import React, { useContext, memo } from 'react';
import PropTypes from 'prop-types';

import { cityClickContext } from '../../index';

import css from './index.module.less';

function CityItem(props) {
  const { name } = props;

  const handleClick = useContext(cityClickContext);

  const onClick = () => {
    handleClick(name);
  };

  return (
    <div className={css['city-item-wrapper']}>
      <li className={css['city-li']} onClick={onClick}>
        {name}
      </li>
    </div>
  );
}

CityItem.propTypes = {
  name: PropTypes.string.isRequired
};

export default memo(CityItem);
