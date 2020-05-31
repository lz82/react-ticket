import { fromJS } from 'immutable';
import { actionTypes, actionCreators } from './actions';

export { actionTypes as ticketactionTypes, actionCreators as ticketActionCreators };

export const getDStation = (state) => {
  return state.getIn(['ticket', 'dStation']);
};

export const getAStation = (state) => {
  return state.getIn(['ticket', 'aStation']);
};

export const getTrainNum = (state) => {
  return state.getIn(['ticket', 'trainNum']);
};

export const getDDate = (state) => {
  return state.getIn(['ticket', 'dDate']);
};

export const getUriParsedStatus = (state) => {
  return state.getIn(['ticket', 'isUriParsed']);
};

const defaultState = {
  dStation: '',
  aStation: '',
  trainNum: '',
  dDate: '',
  isUriParsed: false
};

export default (state = fromJS(defaultState), action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_D_STATION:
      return state.set('dStation', payload);
    case actionTypes.SET_A_STATION:
      return state.set('aStation', payload);
    case actionTypes.SET_TRAIN_NUM:
      return state.set('trainNum', payload);
    case actionTypes.SET_D_DATE:
      return state.set('dDate', payload);
    case actionTypes.SET_URI_PARSED_STATUS:
      return state.set('isUriParsed', payload);
    default:
      return state;
  }
};
