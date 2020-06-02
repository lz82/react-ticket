export const actionTypes = {
  SET_D_STATION: 'ticket/set_d_station',
  SET_A_STATION: 'ticket/set_a_station',
  SET_TRAIN_NUM: 'ticket/set_train_num',
  SET_D_DATE: 'ticket/set_d_date',
  SET_D_TIME: 'ticket/set_d_time',
  SET_A_DATE: 'ticket/set_a_date',
  SET_A_TIME: 'ticket/set_a_time',
  SET_DURATION_TIME: 'ticket/set_duration_time',
  SET_URI_PARSED_STATUS: 'ticket/set_uri_parsed_status',
  SET_CANDIDATES: 'ticket/set_candidates',
  TOGGLE_SHOW_SCHEDULE: 'ticket/toggle_show_schedule'
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

  setDTime(val) {
    return {
      type: actionTypes.SET_D_TIME,
      payload: val
    };
  },

  setADate(val) {
    return {
      type: actionTypes.SET_A_DATE,
      payload: val
    };
  },

  setATime(val) {
    return {
      type: actionTypes.SET_A_TIME,
      payload: val
    };
  },

  setDurationTime(val) {
    return {
      type: actionTypes.SET_DURATION_TIME,
      payload: val
    };
  },

  setTicketParsedStatus(status) {
    return {
      type: actionTypes.SET_URI_PARSED_STATUS,
      payload: status
    };
  },

  setCandidates(val) {
    return {
      type: actionTypes.SET_CANDIDATES,
      payload: val
    };
  },

  toggleShowSchedule() {
    return {
      type: actionTypes.TOGGLE_SHOW_SCHEDULE
    };
  }
};
