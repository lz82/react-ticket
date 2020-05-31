export const actionTypes = {
  SET_D_STATION: 'ticket/set_d_station',
  SET_A_STATION: 'ticket/set_a_station',
  SET_TRAIN_NUM: 'ticket/set_train_num',
  SET_D_DATE: 'ticket/set_d_date',
  SET_URI_PARSED_STATUS: 'ticket/set_uri_parsed_status'
};

export const actionCreators = {
  setDStation(val) {
    return {
      type: actionTypes.SET_D_STATION,
      payload: val
    };
  },

  setAStation(val) {
    return {
      type: actionTypes.SET_A_STATION,
      payload: val
    };
  },

  setTrainNum(val) {
    return {
      type: actionTypes.SET_TRAIN_NUM,
      payload: val
    };
  },

  setDDate(val) {
    return {
      type: actionTypes.SET_D_DATE,
      payload: val
    };
  },

  setTicketParsedStatus(status) {
    return {
      type: actionTypes.SET_URI_PARSED_STATUS,
      payload: status
    };
  }
};
