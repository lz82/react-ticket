import { fromJS } from 'immutable';

import { actionTypes, actionCreators } from './actions';

export { actionTypes as queryActionTypes, actionCreators as queryActionCreators };

export const getFrom = (state) => {
  return state.getIn(['query', 'from']);
};

export const getTo = (state) => {
  return state.getIn(['query', 'to']);
};

export const getDepartDate = (state) => {
  return state.getIn(['query', 'departureDate']);
};

export const getHighSpeed = (state) => {
  return state.getIn(['query', 'highSpeed']);
};

export const getUriParsedStatus = (state) => {
  return state.getIn(['query', 'uriPased']);
};

export const getTrainList = (state) => {
  return state.getIn(['query', 'trainList']);
};

const defaultState = {
  from: '',
  to: '',
  departureDate: '',
  highSpeed: false,
  uriPased: false,
  trainList: []
};

export default (state = fromJS(defaultState), action) => {
  switch (action.type) {
    case actionTypes.SET_FROM:
      return state.set('from', action.payload);
    case actionTypes.SET_TO:
      return state.set('to', action.payload);
    case actionTypes.SET_DEPARTURE_DATE:
      return state.set('departureDate', action.payload);
    case actionTypes.SET_HIGH_SPEED:
      return state.set('highSpeed', action.payload);
    case actionTypes.SET_URI_PARSED_STATUS:
      return state.set('uriPased', action.payload);

    case actionTypes.SET_TRAIN_LIST:
      return state.set('trainList', action.payload)
    default:
      return state;
  }
};
