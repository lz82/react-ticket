import { fromJS } from 'immutable';
import { actionTypes, actionCreators } from './actions';

export { actionTypes as homeActionTypes, actionCreators as homeActionCreators };

const defaultState = {
  from: '上海',
  to: '北京',
  showCitySelector: false,
  currentCitySide: 'from',
  departureData: '',
  onlyHighSpeed: false,
  isLoadingCity: false
};

export default (state = fromJS(defaultState), action) => {
  switch (action.type) {
    default:
      return state;
  }
};
