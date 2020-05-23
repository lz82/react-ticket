export const actionTypes = {
  SET_FROM: 'query/set_from',
  SET_TO: 'query/set_to',
  SET_DEPARTURE_DATE: 'query/set_departure_data',
  SET_HIGH_SPEED: 'query/set_high_speed',
  SET_URI_PARSED_STATUS: 'query/set_uri_pased_status',
  SET_TRAIN_LIST: 'query/set_train_list'
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
  }
};
