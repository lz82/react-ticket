import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import css from './index.module.less';

export default function Navbar(props) {
  const { title, onBack, fixed } = props;
  return (
    <div className={classnames(css['navbar-wrapper'], { [css['fixed']]: fixed })}>
      <div className={css['back']} onClick={onBack}>
        <svg width="42" height="42">
          <polyline points="25,13 16,21 25,29" stroke="#fff" strokeWidth="2" fill="none" />
        </svg>
      </div>
      <h1 className={css['title']}>{title || '标题'}</h1>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired
};
