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

export const getOrderType = (state) => {
  return state.getIn(['query', 'orderType']);
};

export const getOnlyTicket = (state) => {
  return state.getIn(['query', 'onlyTicket']);
};

export const getFilterStatus = (state) => {
  return state.getIn(['query', 'showFilter']);
};

export const getFilterArrStation = (state) => {
  return state.getIn(['query', 'filterArrStation']);
};

export const getFilterDepStation = (state) => {
  return state.getIn(['query', 'filterDepStation']);
};

export const getFilterTicketType = (state) => {
  return state.getIn(['query', 'filterTicketType']);
};

export const getFilterTrainType = (state) => {
  return state.getIn(['query', 'filterTrainType']);
};

export const getCheckedArrStation = (state) => {
  const temp = state.getIn(['query', 'checkedArrStation']);
  console.log(temp);
  return temp ? temp.toJS() : {};
};

export const getCheckedDepStation = (state) => {
  const temp = state.getIn(['query', 'checkedDepStation']);
  console.log(temp);
  return temp ? temp.toJS() : {};
};

export const getCheckedTicketType = (state) => {
  const temp = state.getIn(['query', 'checkedTicketType']);
  console.log(temp);
  return temp ? temp.toJS() : {};
};

export const getCheckedTrainType = (state) => {
  const temp = state.getIn(['query', 'checkedTrainType']);
  console.log(temp);
  return temp ? temp.toJS() : {};
};

const defaultState = {
  from: '',
  to: '',
  departureDate: '',
  highSpeed: false,
  uriPased: false,
  trainList: [],
  orderType: 0,
  onlyTicket: false,
  showFilter: false,
  filterArrStation: [],
  filterDepStation: [],
  filterTicketType: [],
  filterTrainType: [],
  checkedArrStation: {},
  checkedDepStation: {},
  checkedTicketType: { 3: true, 7: true },
  checkedTrainType: {}
};

export default (state = fromJS(defaultState), action) => {
  const checkedTrainType = state.get('checkedTrainType')
    ? state.get('checkedTrainType').toJS()
    : {};
  switch (action.type) {
    case actionTypes.SET_FROM:
      return state.set('from', action.payload);
    case actionTypes.SET_TO:
      return state.set('to', action.payload);
    case actionTypes.SET_DEPARTURE_DATE:
      return state.set('departureDate', action.payload);
    case actionTypes.SET_HIGH_SPEED:
      return action.payload
        ? state.merge({
            highSpeed: true,
            checkedTrainType: fromJS({
              1: true,
              5: true
            })
          })
        : state.set('highSpeed', action.payload);
    case actionTypes.SET_URI_PARSED_STATUS:
      return state.set('uriPased', action.payload);

    case actionTypes.SET_TRAIN_LIST:
      return state.set('trainList', action.payload);
    case actionTypes.SET_FILTER_ARR_STATION:
      return state.set('filterArrStation', action.payload);
    case actionTypes.SET_FILTER_DEP_STATION:
      return state.set('filterDepStation', action.payload);
    case actionTypes.SET_FILTER_TICKET_TYPE:
      return state.set('filterTicketType', action.payload);
    case actionTypes.SET_FILTER_TRAIN_TYPE:
      return state.set('filterTrainType', action.payload);

    case actionTypes.SET_CHECKED_ARR_STATION:
      return state.set('checkedArrStation', fromJS(action.payload));
    case actionTypes.SET_CHECKED_DEP_STATION:
      return state.set('checkedDepStation', fromJS(action.payload));
    case actionTypes.SET_CHECKED_TICKET_TYPE:
      return state.set('checkedTicketType', fromJS(action.payload));
    case actionTypes.SET_CHECKED_TRAIN_TYPE:
      if (1 in action.payload && 5 in action.payload) {
        return state.merge({
          highSpeed: true,
          checkedTrainType: fromJS(action.payload)
        });
      } else {
        return state.merge({
          highSpeed: false,
          checkedTrainType: fromJS(action.payload)
        });
      }
    case actionTypes.TOGGLE_ORDER_TYPE:
      return state.set('orderType', !state.get('orderType') - 0);
    case actionTypes.TOGGLE_HIGH_SPEED:
      if (!state.get('highSpeed')) {
        return state.merge({
          highSpeed: true,
          checkedTrainType: fromJS({ ...checkedTrainType, 1: true, 5: true })
        });
      } else {
        delete checkedTrainType[1];
        delete checkedTrainType[5];
        return state.merge({
          highSpeed: false,
          checkedTrainType: fromJS(checkedTrainType)
        });
      }
    case actionTypes.TOGGLE_ONLY_TICKET:
      return state.set('onlyTicket', !state.get('onlyTicket'));
    case actionTypes.TOGGLE_SHOW_FILTER:
      return state.set('showFilter', !state.get('showFilter'));
    default:
      return state;
  }
};
