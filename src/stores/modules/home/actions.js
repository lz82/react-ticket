export const actionTypes = {
  SET_STATION_FROM: 'home/set_station_from',
  SET_STATION_TO: 'home/set_station_to',
  SWITCH_STATION: 'home/switch_station',
  SHOW_CITY_SELECT: 'home/show_city_select',
  HIDE_CITY_SELECT: 'home/hide_city_select',
  SET_DEPARTURE_DATE: 'home/set_departure_date',
  TOGGLE_HIGH_SPEED_OPT: 'home/toggle_high_speed_opt'
};

export const actionCreators = {
  setStationFrom: (from) => {
    return {
      type: actionTypes.SET_STATION_FROM,
      payload: from
    };
  },

  setStationTo: (to) => {
    return {
      type: actionTypes.SET_STATION_TO,
      payload: to
    };
  },

  switchStation: () => {
    return {
      type: actionTypes.SWITCH_STATION
    };
  },

  hideCitySelector: () => {
    return {
      type: actionTypes.HIDE_CITY_SELECT
    };
  },

  showCitySelector: (side) => {
    return {
      type: actionTypes.SHOW_CITY_SELECT,
      payload: side
    };
  },

  setDepartureDate: (date) => {
    return {
      type: actionTypes.SET_DEPARTURE_DATE,
      payload: date
    };
  },

  toggleHighSpeedOpt: () => {
    return {
      type: actionTypes.TOGGLE_HIGH_SPEED_OPT
    };
  }
};
