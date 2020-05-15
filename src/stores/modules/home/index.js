import { fromJS } from 'immutable';
import { actionTypes, actionCreators } from './actions';
import { getDate } from '@/utils/format';
export { actionTypes as homeActionTypes, actionCreators as homeActionCreators };

const defaultState = {
  from: '南京',
  to: '北京',
  showCitySelector: false,
  currentCitySide: 'from',
  departureDate: getDate(),
  showDateSelector: false,
  onlyHighSpeed: false,
  isLoadingCity: false
};

export const getStationFrom = (state) => {
  return state.getIn(['home', 'from']);
};

export const getStationTo = (state) => {
  return state.getIn(['home', 'to']);
};

export const getCitySelectorStatus = (state) => {
  return state.getIn(['home', 'showCitySelector']);
};

export const getDepartDate = (state) => {
  return state.getIn(['home', 'departureDate']);
};

export const getDateSelectorStatus = (state) => {
  return state.getIn(['home', 'showDateSelector']);
};

export const getHighSpeedStatus = state => {
  return state.getIn(['home', 'onlyHighSpeed'])
}

export default (state = fromJS(defaultState), action) => {
  switch (action.type) {
    case actionTypes.SET_STATION_FROM:
      return state.set('from', action.payload);
    case actionTypes.SET_STATION_TO:
      return state.set('to', action.payload);
    case actionTypes.SWITCH_STATION:
      return state.merge({
        from: state.get('to'),
        to: state.get('from')
      });
    case actionTypes.SHOW_CITY_SELECT:
      return state.merge({
        showCitySelector: true,
        currentCitySide: action.payload
      });
    case actionTypes.HIDE_CITY_SELECT:
      return state.set('showCitySelector', false);
    case actionTypes.SET_DEPARTURE_DATE:
      return state.set('departureDate', action.payload);
    case actionTypes.TOGGLE_HIGH_SPEED_OPT:
      return state.set('onlyHighSpeed', !state.get('onlyHighSpeed'));
    case actionTypes.SHOW_DATE_SELECT:
      return state.set('showDateSelector', true);
    case actionTypes.HIDE_DATE_SELECT:
      return state.set('showDateSelector', false);
    default:
      return state;
  }
};
