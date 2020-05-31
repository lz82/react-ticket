import React, { useCallback, useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import URI from 'urijs';

import NavBar from '@/components/navbar';
import DateNav from '@/components/date-nav';

import {
  getDStation,
  getAStation,
  getTrainNum,
  getDDate,
  getUriParsedStatus,
  ticketActionCreators
} from '@/stores/modules/ticket';

import css from './index.module.less';

function Ticket(props) {
  const { dStation, aStation, trainNum, dDate, uriParsedStatus, dispatch } = props;

  useEffect(() => {
    const query = URI.parseQuery(props.location.search);
    document.title = query.trainNum;
    ticketActions.setDStation(query.dStation);
    ticketActions.setAStation(query.aStation);
    ticketActions.setTrainNum(query.trainNum);
    ticketActions.setDDate(query.date);
    ticketActions.setTicketParsedStatus(true);
  }, []);

  const ticketActions = useMemo(() => {
    return bindActionCreators(ticketActionCreators, dispatch);
  }, []);

  const onBack = useCallback(() => {
    props.history.goBack();
  }, []);

  return (
    <div className={css['ticket-wrapper']}>
      <NavBar title="D717" onBack={onBack} />
      <DateNav date={dDate} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    dStation: getDStation(state),
    aStation: getAStation(state),
    trainNum: getTrainNum(state),
    dDate: getDDate(state),
    uriParsedStatus: getUriParsedStatus(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Ticket);
