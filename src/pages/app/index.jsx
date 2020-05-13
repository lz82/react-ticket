import React from 'react';
import { connect } from 'react-redux'

import ErrorToast from '@/components/error-toast';

import { getErrorMsg } from '@/stores/modules/app'

import css from './index.module.less';

function App(props) {
  return (
    <div className={css['app-wrapper']}>
      {props.children}
      <ErrorToast />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    errorMsg: getErrorMsg(state)
  }
}

export default connect(mapStateToProps, null)(App)
