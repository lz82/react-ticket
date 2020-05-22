import React, { useCallback, useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import URI from 'urijs';

import { queryApi } from '@/services';

import Navbar from '@/components/navbar';

import {
  getFrom,
  getTo,
  getDepartDate,
  getHighSpeed,
  queryActionCreators,
  getUriParsedStatus
} from '@/stores/modules/query';

import css from './index.module.less';

function Query(props) {
  const { from, to, departureDate, highSpeed, uriParseStatus, dispatch } = props;

  useEffect(() => {
    const query = URI.parseQuery(props.location.search);
    queryActions.setFrom(query.from);
    queryActions.setTo(query.to);
    queryActions.setDepartDate(query.date);
    queryActions.setHighSpeed(query.highSpeed);
    queryActions.setUriParsedStatus(true);
  }, []);

  const fetchTrainList = async () => {
    const res = await queryApi.queryTrainList({
      from,
      to,
      departureDate,
      highSpeed
    });
    console.log(res);
  };

  useEffect(() => {
    if (uriParseStatus) {
      fetchTrainList();
    }
  }, [uriParseStatus]);

  const onBack = useCallback(() => {
    props.history.goBack();
  }, []);

  const queryActions = useMemo(() => {
    return bindActionCreators(queryActionCreators, dispatch);
  }, []);

  return (
    <div className={css['query-wrapper']}>
      <Navbar title={`${from} ⇀ ${to}`} onBack={onBack} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    from: getFrom(state),
    to: getTo(state),
    departureDate: getDepartDate(state),
    highSpeed: getHighSpeed(state),
    uriParseStatus: getUriParsedStatus(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Query);
