import { orderApi } from '@/services';
import { getDate } from '@/utils/format';

export const actionTypes = {
  SET_TRAIN_NUM: 'order/set_train_num',
  SET_D_STATION: 'order/set_d_station',
  SET_A_STATION: 'order/set_a_station',
  SET_SEAT_TYPE: 'order/set_seat_type',
  SET_D_DATE: 'order/set_d_date',
  SET_D_TIME: 'order/set_d_time',
  SET_A_DATE: 'order/set_a_date',
  SET_A_TIME: 'order/set_a_time',
  SET_DURATION: 'order/set_duration',
  SET_PRICE: 'order/set_price',
  SET_URI_PARSE_STATUS: 'order/set_uri_parse_status',
  SET_PASSENGER: 'order/set_passenger'
};

const setDTime = (val) => {
  return {
    type: actionTypes.SET_D_TIME,
    payload: val
  };
};

const setADate = (val) => {
  return {
    type: actionTypes.SET_A_DATE,
    payload: val
  };
};

const setATime = (val) => {
  return {
    type: actionTypes.SET_A_TIME,
    payload: val
  };
};

const setDuration = (val) => {
  return {
    type: actionTypes.SET_DURATION,
    payload: val
  };
};

const setPrice = (val) => {
  return {
    type: actionTypes.SET_PRICE,
    payload: val
  };
};

const setPassenger = (val) => {
  return {
    type: actionTypes.SET_PASSENGER,
    payload: val
  };
};

let passenger_id = 0;

export const actionCreators = {
  setTrainNum(val) {
    return {
      type: actionTypes.SET_TRAIN_NUM,
      payload: val
    };
  },

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

  setSeatType(val) {
    return {
      type: actionTypes.SET_SEAT_TYPE,
      payload: val
    };
  },

  setDDate(val) {
    return {
      type: actionTypes.SET_D_DATE,
      payload: val
    };
  },

  setUriParseStatus(val) {
    return {
      type: actionTypes.SET_URI_PARSE_STATUS,
      payload: val
    };
  },

  fetchTrainInfo(data) {
    return async (dispatch, getState) => {
      const state = getState();
      try {
        const postData = {
          trainNum: state.getIn(['order', 'trainNum']),
          dStation: state.getIn(['order', 'dStation']),
          aStation: state.getIn(['order', 'aStation']),
          seatType: state.getIn(['order', 'seatType']),
          dDate: state.getIn(['order', 'dDate'])
        };
        const {
          departTimeStr,
          arriveTimeStr,
          arriveDate,
          durationStr,
          price
        } = await orderApi.getOrderInfo(postData);
        dispatch(setDTime(departTimeStr));
        dispatch(setADate(getDate(arriveDate)));
        dispatch(setATime(arriveTimeStr));
        dispatch(setDuration(durationStr));
        dispatch(setPrice(price));
      } catch (err) {
        dispatch({ error: err.toString() });
      }
    };
  },

  addAdult() {
    return (dispatch, getState) => {
      const list = getState().getIn(['order', 'passengers']).toJS();
      const newList = [
        ...list,
        {
          id: ++passenger_id,
          ticketType: 'adult',
          name: '',
          licenceNo: ''
        }
      ];
      dispatch(setPassenger(newList));
    };
  },

  addChild() {
    return (dispatch, getState) => {
      const list = getState().getIn(['order', 'passengers']).toJS();
      const newList = [
        ...list,
        {
          id: ++passenger_id,
          ticketType: 'child',
          name: '',
          gender: '',
          birthday: '',
          followAdultName: ''
        }
      ];
      dispatch(setPassenger(newList));
    };
  },

  updatePassenger(id, info) {
    return (dispatch, getState) => {
      let list = getState().getIn(['order', 'passengers']).toJS();
      const updateIdx = list.findIndex((item) => item.id === id);
      const newInfo = Object.assign(list[updateIdx], { ...info });
      list.splice(updateIdx, 1, newInfo);
      dispatch(setPassenger(list));
    };
  }
};
