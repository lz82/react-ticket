import React, { memo } from 'react';

import PropTypes from 'prop-types';

import css from './index.module.less';

function AlphaIndex(props) {
  const { onIndexClick } = props;

  const alphabet = Array.from(new Array(26), (ele, index) => {
    return String.fromCharCode(65 + index);
  });

  const onClick = (item) => {
    onIndexClick(item);
  };

  return (
    <ul className={css['alpha-index-wrapper']}>
      {alphabet.map((item) => {
        return (
          <li key={item} className={css['item']} onClick={() => onClick(item)}>
            {item}
          </li>
        );
      })}
    </ul>
  );
}

AlphaIndex.propTypes = {
  onIndexClick: PropTypes.func.isRequired
};

export default memo(AlphaIndex);
