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
  SET_PASSENGER: 'order/set_passenger',
  SET_MENU: 'order/set_menu',
  SET_MENU_VISIBLE: 'order/set_menu_visible'
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
  },

  removePassenger(id) {
    return (dispatch, getState) => {
      let list = getState().getIn(['order', 'passengers']).toJS();
      const delIndex = list.findIndex((item) => item.id === id);
      list.splice(delIndex, 1);
      dispatch(setPassenger(list));
    };
  },

  setMenu(val) {
    return {
      type: actionTypes.SET_MENU,
      payload: val
    };
  },

  setMenuVisible(status) {
    return {
      type: actionTypes.SET_MENU_VISIBLE,
      payload: status
    };
  },

  showMenu(menu) {
    return (dispatch) => {
      dispatch(actionCreators.setMenu(menu));
      dispatch(actionCreators.setMenuVisible(true));
    };
  },

  hideMenu() {
    return actionCreators.setMenuVisible(false);
  },

  showTicketTypeMenu(id) {
    return (dispatch, getState) => {
      const list = getState().getIn(['order', 'passengers']).toJS();

      const passenger = list.find((item) => item.id === id);

      if (!passenger) {
        return;
      }

      dispatch(
        actionCreators.showMenu({
          onPress(ticketType) {
            console.log('onpress', ticketType);
            if (ticketType === 'adult') {
              dispatch(
                actionCreators.updatePassenger(
                  id,
                  {
                    ticketType,
                    licenceNo: ''
                  },
                  ['gender', 'followAdult', 'birthday']
                )
              );
            } else {
              const adult = list.find(
                (passenger) => passenger.id !== id && passenger.ticketType === 'adult'
              );
              if (adult) {
                dispatch(
                  actionCreators.updatePassenger(
                    id,
                    {
                      ticketType,
                      gender: '',
                      followAdult: adult.id,
                      birthday: ''
                    },
                    ['licenceNo']
                  )
                );
              } else {
                alert('没有其他成人乘客');
              }
            }

            dispatch(actionCreators.hideMenu());
          },
          options: [
            {
              title: '成人票',
              value: 'adult',
              active: passenger.ticketType === 'adult'
            },
            {
              title: '儿童票',
              value: 'child',
              active: passenger.ticketType === 'child'
            }
          ]
        })
      );
    };
  },

  showGenderMenu(id) {
    return (dispatch, getState) => {
      const list = getState().getIn(['order', 'passengers']).toJS();

      const passenger = list.find((item) => item.id === id);

      if (!passenger) {
        return;
      }

      dispatch(
        actionCreators.showMenu({
          onPress(gender) {
            dispatch(actionCreators.updatePassenger(id, { gender }));
            dispatch(actionCreators.hideMenu());
          },
          options: [
            {
              title: '男',
              value: 'male',
              active: passenger.gender === 'male'
            },
            {
              title: '女',
              value: 'female',
              active: passenger.gender === 'female'
            }
          ]
        })
      );
    };
  },

  showFollowAdultMenu(id) {
    return (dispatch, getState) => {
      const list = getState().getIn(['order', 'passengers']).toJS();

      const passenger = list.find((item) => item.id === id);

      if (!passenger) {
        return;
      }

      dispatch(
        actionCreators.showMenu({
          onPress(followAdult) {
            dispatch(actionCreators.updatePassenger(id, { followAdult }));
            dispatch(actionCreators.hideMenu());
          },
          options: list
            .filter((passenger) => passenger.ticketType === 'adult')
            .map((adult) => {
              return {
                title: adult.name,
                value: adult.id,
                active: adult.id === passenger.followAdult
              };
            })
        })
      );
    };
  }
};
