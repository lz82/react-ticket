import { fromJS } from 'immutable';
import { actionTypes, actionCreators } from './actions';

export { actionTypes as orderActionTypes, actionCreators as orderActionCreators };

export const getTrainNum = (state) => {
  return state.getIn(['order', 'trainNum']);
};

export const getDStation = (state) => {
  return state.getIn(['order', 'dStation']);
};

export const getAStation = (state) => {
  return state.getIn(['order', 'aStation']);
};

export const getSeatType = (state) => {
  return state.getIn(['order', 'seatType']);
};

export const getDDate = (state) => {
  return state.getIn(['order', 'dDate']);
};

export const getDTime = (state) => {
  return state.getIn(['order', 'dTime']);
};

export const getADate = (state) => {
  return state.getIn(['order', 'aDate']);
};

export const getATime = (state) => {
  return state.getIn(['order', 'aTime']);
};

export const getUriParsedStatus = (state) => {
  return state.getIn(['order', 'uriParsed']);
};

export const getDuration = (state) => {
  return state.getIn(['order', 'duration']);
};

export const getPrice = (state) => {
  return state.getIn(['order', 'price']);
};

export const getPassengers = (state) => {
  const temp = state.getIn(['order', 'passengers']);
  return temp ? temp.toJS() : [];
};

const defaultState = {
  trainNum: '',
  dStation: '',
  aStation: '',
  seatType: '',
  dDate: '',
  dTime: '',
  aDate: '',
  aTime: '',
  uriParsed: false,
  duration: '',
  price: 0,
  passengers: []
};

export default (state = fromJS(defaultState), action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_TRAIN_NUM:
      return state.set('trainNum', payload);
    case actionTypes.SET_A_STATION:
      return state.set('dStation', payload);
    case actionTypes.SET_D_STATION:
      return state.set('aStation', payload);
    case actionTypes.SET_SEAT_TYPE:
      return state.set('seatType', payload);
    case actionTypes.SET_D_DATE:
      return state.set('dDate', payload);
    case actionTypes.SET_D_TIME:
      return state.set('dTime', payload);
    case actionTypes.SET_A_DATE:
      return state.set('aDate', payload);
    case actionTypes.SET_A_TIME:
      return state.set('aTime', payload);
    case actionTypes.SET_URI_PARSE_STATUS:
      return state.set('uriParsed', payload);
    case actionTypes.SET_DURATION:
      return state.set('duration', payload);
    case actionTypes.SET_PRICE:
      return state.set('price', payload);
    case actionTypes.SET_PASSENGER:
      return state.set('passengers', fromJS(payload));
    default:
      return state;
  }
};
