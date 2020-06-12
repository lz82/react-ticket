import React, { useMemo, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import URI from 'urijs';
import Navbar from '@/components/navbar';
import TrainDetail from '@/components/train-detail';
import Ticket from './containers/ticket';
import Passengers from './containers/passengers';
import Menu from '@/components/menu';
import Seat from './containers/seat';
import Account from './containers/account';

import {
  orderActionCreators,
  getTrainNum,
  getDStation,
  getAStation,
  getSeatType,
  getDDate,
  getDTime,
  getADate,
  getATime,
  getUriParsedStatus,
  getDuration,
  getPrice,
  getPassengers,
  getMenu,
  getMenuVisible
} from '@/stores/modules/order';

import css from './index.module.less';

function Order(props) {
  const {
    dispatch,
    trainNum,
    dStation,
    aStation,
    seatType,
    dDate,
    dTime,
    aDate,
    aTime,
    uriParsedStatus,
    duration,
    price,
    passengers,
    menu,
    menuVisible
  } = props;

  useEffect(() => {
    const query = URI.parseQuery(props.location.search);
    orderActions.setTrainNum(query.trainNumber);
    orderActions.setDStation(query.dStation);
    orderActions.setAStation(query.aStation);
    orderActions.setSeatType(query.type);
    orderActions.setDDate(query.date);
    orderActions.setUriParseStatus(true);
  }, []);

  useEffect(() => {
    if (uriParsedStatus) {
      orderActions.fetchTrainInfo();
    }
  }, [uriParsedStatus]);

  const onBack = () => {
    props.history.goBack();
  };

  const orderActions = useMemo(() => {
    return bindActionCreators(orderActionCreators, dispatch);
  }, []);

  return (
    <div className={css['order-wrapper']}>
      <Navbar title="订单填写" onBack={onBack} fixed />
      <TrainDetail
        departDate={dDate}
        arriveDate={aDate}
        departTimeStr={dTime}
        arriveTimeStr={aTime}
        trainNumber={trainNum}
        departStation={dStation}
        arriveStation={aStation}
        durationStr={duration}
      >
        <span style={{ display: 'block' }} className={css['train-icon']} />
      </TrainDetail>
      <Ticket price={price} type={seatType} />
      <Passengers
        passengers={passengers}
        addAdult={orderActions.addAdult}
        addChild={orderActions.addChild}
        updatePassenger={orderActions.updatePassenger}
        removePassenger={orderActions.removePassenger}
        showTicketTypeMenu={orderActions.showTicketTypeMenu}
        showGenderMenu={orderActions.showGenderMenu}
        showFollowAdultMenu={orderActions.showFollowAdultMenu}
      />
      {passengers.length > 0 && (
        <Seat passengers={passengers} updatePassenger={orderActions.updatePassenger} />
      )}
      <Account length={passengers.length} price={price} />
      {menuVisible ? <Menu show={menuVisible} {...menu} hideMenu={orderActions.hideMenu} /> : null}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    trainNum: getTrainNum(state),
    dStation: getDStation(state),
    aStation: getAStation(state),
    seatType: getSeatType(state),
    dDate: getDDate(state),
    dTime: getDTime(state),
    aDate: getADate(state),
    aTime: getATime(state),
    uriParsedStatus: getUriParsedStatus(state),
    duration: getDuration(state),
    price: getPrice(state),
    passengers: getPassengers(state),
    menu: getMenu(state),
    menuVisible: getMenuVisible(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
