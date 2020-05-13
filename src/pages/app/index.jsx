import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ErrorToast from '@/components/error-toast';

import { getErrorMsg, appActionCreators } from '@/stores/modules/app';

import css from './index.module.less';

function App(props) {
  const { errorMsg, dispatch } = props;

  const appActions = useMemo(() => {
    return bindActionCreators(appActionCreators, dispatch);
  }, []);

  return (
    <div className={css['app-wrapper']}>
      {props.children}
      {errorMsg ? <ErrorToast errorMsg={errorMsg} clearError={appActions.clearError} /> : null}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    errorMsg: getErrorMsg(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
