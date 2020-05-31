import React, { useCallback, useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import URI from 'urijs';

import { queryApi } from '@/services';

import Navbar from '@/components/navbar';
import DateNav from '@/components/date-nav';
import TrainListItem from './containers/list-item';
import TabBar from './containers/tab-bar';

import {
  getFrom,
  getTo,
  getDepartDate,
  getHighSpeed,
  queryActionCreators,
  getUriParsedStatus,
  getTrainList,
  getOrderType,
  getOnlyTicket,
  getFilterStatus,
  getFilterArrStation,
  getFilterDepStation,
  getFilterTicketType,
  getFilterTrainType,
  getCheckedArrStation,
  getCheckedDepStation,
  getCheckedTicketType,
  getCheckedTrainType
} from '@/stores/modules/query';

import css from './index.module.less';

function Query(props) {
  const {
    from,
    to,
    departureDate,
    highSpeed,
    uriParseStatus,
    trainList,
    orderType,
    onlyTicket,
    showFilter,
    filter,
    checkedArrStation,
    checkedDepStation,
    checkedTicketType,
    checkedTrainType,
    dispatch
  } = props;

  console.log(checkedTicketType);

  useEffect(() => {
    const query = URI.parseQuery(props.location.search);
    queryActions.setFrom(query.from);
    queryActions.setTo(query.to);
    queryActions.setDepartDate(query.date);
    queryActions.setHighSpeed(query.highSpeed === 'true');
    queryActions.setUriParsedStatus(true);
  }, []);

  const fetchTrainList = async (data) => {
    const {
      dataMap: {
        directTrainInfo: {
          trains,
          filter: { arrStation, depStation, ticketType, trainType }
        }
      }
    } = await queryApi.queryTrainList(data);
    queryActions.setTrainList(trains);
    queryActions.setFilterArrStation(arrStation);
    queryActions.setFilterDepStation(depStation);
    queryActions.setFilterTicketType(ticketType);
    queryActions.setFilterTrainType(trainType);
  };

  useEffect(() => {
    if (uriParseStatus) {
      const postData = {
        from,
        to,
        departureDate,
        highSpeed,
        orderType,
        onlyTicket,
        checkedTicketType: Object.keys(checkedTicketType)
          ? Object.keys(checkedTicketType).join(',')
          : '',
        checkedTrainType: Object.keys(checkedTrainType)
          ? Object.keys(checkedTrainType).join(',')
          : '',
        checkedDepStation: Object.keys(checkedDepStation)
          ? Object.keys(checkedDepStation).join(',')
          : '',
        checkedArrStation: Object.keys(checkedArrStation)
          ? Object.keys(checkedArrStation).join(',')
          : ''
      };
      fetchTrainList(postData);
    }
  }, [
    uriParseStatus,
    from,
    to,
    departureDate,
    highSpeed,
    orderType,
    onlyTicket,
    Object.keys(checkedTicketType).join(','),
    Object.keys(checkedTrainType).join(','),
    Object.keys(checkedDepStation).join(','),
    Object.keys(checkedArrStation).join(',')
  ]);

  const onBack = useCallback(() => {
    props.history.goBack();
  }, []);

  const queryActions = useMemo(() => {
    return bindActionCreators(queryActionCreators, dispatch);
  }, []);

  return (
    <div className={css['query-wrapper']}>
      <div className={css['header-fixed']}>
        <Navbar title={`${from} ⇀ ${to}`} onBack={onBack} />
        <DateNav
          date={departureDate}
          prev={queryActions.setDepartDate}
          next={queryActions.setDepartDate}
        />
      </div>
      <ul className={css['train-list']}>
        {trainList.map((item) => (
          <TrainListItem {...item} date={departureDate} key={item.trainNumber} />
        ))}
      </ul>
      <div className={css['tab-bar-wrapper']}>
        <TabBar
          highSpeed={highSpeed}
          orderType={orderType}
          onlyTickets={onlyTicket}
          isFiltersVisible={showFilter}
          filter={filter}
          checkedArrStation={checkedArrStation}
          checkedDepStation={checkedDepStation}
          checkedTicketType={checkedTicketType}
          checkedTrainType={checkedTrainType}
          toggleOrderType={queryActions.toggleOrderType}
          toggleHighSpeed={queryActions.toggleHighSpeed}
          toggleOnlyTickets={queryActions.toggleOnlyTicket}
          toggleIsFiltersVisible={queryActions.toggleShowFilter}
          setCheckedArrStation={queryActions.setCheckedArrStation}
          setCheckedDepStation={queryActions.setCheckedDepStation}
          setCheckedTrainType={queryActions.setCheckedTrainType}
          setCheckedTicketType={queryActions.setCheckedTicketType}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    from: getFrom(state),
    to: getTo(state),
    departureDate: getDepartDate(state),
    highSpeed: getHighSpeed(state),
    uriParseStatus: getUriParsedStatus(state),
    trainList: getTrainList(state),
    orderType: getOrderType(state),
    onlyTicket: getOnlyTicket(state),
    showFilter: getFilterStatus(state),
    filter: {
      arrStation: getFilterArrStation(state),
      depStation: getFilterDepStation(state),
      trainType: getFilterTrainType(state),
      ticketType: getFilterTicketType(state)
    },
    checkedArrStation: getCheckedArrStation(state),
    checkedDepStation: getCheckedDepStation(state),
    checkedTicketType: getCheckedTicketType(state),
    checkedTrainType: getCheckedTrainType(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Query);
