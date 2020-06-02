import React, { useCallback, useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import URI from 'urijs';

import NavBar from '@/components/navbar';
import DateNav from '@/components/date-nav';
import TrainDetail from '@/components/train-detail';
import Schedule from './containers/schedule';

import { commonApi } from '@/services';
import { getDate } from '@/utils/format';

import {
  getDStation,
  getAStation,
  getTrainNum,
  getDDate,
  getDTime,
  getADate,
  getATime,
  getUriParsedStatus,
  ticketActionCreators,
  getShowSchedule
} from '@/stores/modules/ticket';

import css from './index.module.less';
import { getDurationTime } from '../../stores/modules/ticket';

function Ticket(props) {
  const {
    dStation,
    aStation,
    trainNum,
    dDate,
    dTime,
    aDate,
    aTime,
    durationTime,
    uriParsedStatus,
    showSchedule,
    dispatch
  } = props;

  useEffect(() => {
    const query = URI.parseQuery(props.location.search);
    document.title = query.trainNum;
    ticketActions.setDStation(query.dStation);
    ticketActions.setAStation(query.aStation);
    ticketActions.setTrainNum(query.trainNum);
    ticketActions.setDDate(query.date);
    ticketActions.setTicketParsedStatus(true);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          detail: { arriveDate, departTimeStr, arriveTimeStr, durationStr },
          candidates
        } = await commonApi.queryTicket({
          trainNum,
          dDate
        });
        ticketActions.setADate(getDate(arriveDate));
        ticketActions.setDTime(departTimeStr);
        ticketActions.setATime(arriveTimeStr);
        ticketActions.setDurationTime(durationStr);
        ticketActions.setCandidates(candidates);
      } catch (err) {
        console.log(err);
      }
    };
    if (uriParsedStatus) {
      fetchData();
    }
  }, [uriParsedStatus]);

  const ticketActions = useMemo(() => {
    return bindActionCreators(ticketActionCreators, dispatch);
  }, []);

  const onBack = useCallback(() => {
    props.history.goBack();
  }, []);

  const onScheduleClick = () => {
    ticketActions.toggleShowSchedule();
  };

  const onMaskClick = () => {
    ticketActions.toggleShowSchedule();
  };

  return (
    <div className={css['ticket-wrapper']}>
      <NavBar title={trainNum} onBack={onBack} />
      <DateNav date={dDate} next={ticketActions.setDDate} prev={ticketActions.setDDate} />
      <TrainDetail
        departStation={dStation}
        arriveStation={aStation}
        trainNumber={trainNum}
        departDate={dDate}
        arriveDate={aDate}
        departTimeStr={dTime}
        arriveTimeStr={aTime}
        durationStr={durationTime}
      >
        <span className={css['left']} />
        <span className={css['schedule']} onClick={onScheduleClick}>
          时刻表
        </span>
        <span className={css['right']} />
      </TrainDetail>
      {showSchedule && (
        <div className={css['mask']} onClick={onMaskClick}>
          <Schedule />
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    dStation: getDStation(state),
    aStation: getAStation(state),
    trainNum: getTrainNum(state),
    dDate: getDDate(state),
    dTime: getDTime(state),
    aDate: getADate(state),
    aTime: getATime(state),
    durationTime: getDurationTime(state),
    uriParsedStatus: getUriParsedStatus(state),
    showSchedule: getShowSchedule(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Ticket);
