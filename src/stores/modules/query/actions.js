export const actionTypes = {
  SET_FROM: 'query/set_from',
  SET_TO: 'query/set_to',
  SET_DEPARTURE_DATE: 'query/set_departure_data',
  SET_HIGH_SPEED: 'query/set_high_speed',
  SET_URI_PARSED_STATUS: 'query/set_uri_pased_status',
  SET_TRAIN_LIST: 'query/set_train_list',
  SET_FILTER_ARR_STATION: 'query/set_filter_arr_station',
  SET_FILTER_DEP_STATION: 'query/set_filter_arr_station',
  SET_FILTER_TRAIN_TYPE: 'query/set_filter_arr_station',
  SET_FILTER_TICKET_TYPE: 'query/set_filter_arr_station',
  TOGGLE_ORDER_TYPE: 'query/toggle_order_type',
  TOGGLE_HIGH_SPEED: 'query/toggle_hight_speed',
  TOGGLE_ONLY_TICKET: 'query/toggle_only_ticket',
  TOGGLE_SHOW_FILTER: 'query/toggle_show_filter'
};

export const actionCreators = {
  setFrom(from) {
    return {
      type: actionTypes.SET_FROM,
      payload: from
    };
  },

  setTo(to) {
    return {
      type: actionTypes.SET_TO,
      payload: to
    };
  },

  setDepartDate(date) {
    return {
      type: actionTypes.SET_DEPARTURE_DATE,
      payload: date
    };
  },

  setHighSpeed(status) {
    return {
      type: actionTypes.SET_HIGH_SPEED,
      payload: status
    };
  },

  setUriParsedStatus(status) {
    return {
      type: actionTypes.SET_URI_PARSED_STATUS,
      payload: status
    };
  },

  setTrainList(data) {
    return {
      type: actionTypes.SET_TRAIN_LIST,
      payload: data
    };
  },

  setFilterArrStation(data) {
    return {
      type: actionTypes.SET_FILTER_ARR_STATION,
      payload: data
    };
  },

  setFilterDepStation(data) {
    return {
      type: actionTypes.SET_FILTER_DEP_STATION,
      payload: data
    };
  },

  setFilterTrainType(data) {
    return {
      type: actionTypes.SET_FILTER_TRAIN_TYPE,
      payload: data
    };
  },

  setFilterTicketType(data) {
    return {
      type: actionTypes.SET_FILTER_TICKET_TYPE,
      payload: data
    };
  },

  toggleOrderType() {
    return {
      type: actionTypes.TOGGLE_ORDER_TYPE
    };
  },

  toggleHighSpeed() {
    return {
      type: actionTypes.TOGGLE_HIGH_SPEED
    };
  },

  toggleOnlyTicket() {
    return {
      type: actionTypes.TOGGLE_ONLY_TICKET
    };
  },

  toggleShowFilter() {
    return {
      type: actionTypes.TOGGLE_SHOW_FILTER
    };
  }
};
