import { fromJS } from 'immutable';
import { actionCreators, actionTypes } from './actions';

export { actionCreators as appActionCreators };

const defaultState = {
  errorMsg: ''
};

export const getErrorMsg = (state) => {
  return state.getIn(['app', 'errorMsg']);
};

export default (state = fromJS(defaultState), action) => {
  const { error, type } = action;
  if (error) {
    return state.set('errorMsg', error);
  } else if (type === actionTypes.CLEAR_ERROR) {
    return state.set('errorMsg', '');
  } else {
    return state;
  }
};
