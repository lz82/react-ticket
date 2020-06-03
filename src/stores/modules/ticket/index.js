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

export const getDTime = (state) => {
  return state.getIn(['ticket', 'dTime']);
};

export const getADate = (state) => {
  return state.getIn(['ticket', 'aDate']);
};

export const getATime = (state) => {
  return state.getIn(['ticket', 'aTime']);
};

export const getDurationTime = (state) => {
  return state.getIn(['ticket', 'durationTime']);
};

export const getUriParsedStatus = (state) => {
  return state.getIn(['ticket', 'isUriParsed']);
};

export const getShowSchedule = (state) => {
  return state.getIn(['ticket', 'showSchedule']);
};

export const getCandidates = (state) => {
  const temp = state.getIn(['ticket', 'candidates']);
  return temp ? temp.toJS() : [];
};

const defaultState = {
  dStation: '',
  aStation: '',
  trainNum: '',
  dDate: '',
  dTime: '',
  aDate: '',
  aTime: '',
  durationTime: '',
  isUriParsed: false,
  showSchedule: false,
  candidates: []
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
    case actionTypes.SET_D_TIME:
      return state.set('dTime', payload);
    case actionTypes.SET_A_DATE:
      return state.set('aDate', payload);
    case actionTypes.SET_A_TIME:
      return state.set('aTime', payload);
    case actionTypes.SET_DURATION_TIME:
      return state.set('durationTime', payload);
    case actionTypes.SET_URI_PARSED_STATUS:
      return state.set('isUriParsed', payload);
    case actionTypes.TOGGLE_SHOW_SCHEDULE:
      return state.set('showSchedule', !state.get('showSchedule'));
    case actionTypes.SET_CANDIDATES:
      return state.set('candidates', fromJS(payload));
    default:
      return state;
  }
};
