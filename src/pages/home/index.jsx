import React, { useCallback, useMemo } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  homeActionCreators,
  getStationFrom,
  getStationTo,
  getCitySelectorStatus,
  getDepartDate,
  getDateSelectorStatus,
  getHighSpeedStatus
} from '@/stores/modules/home';

import Navbar from '@/components/navbar';
import Station from './containers/station';
import DepartureDate from './containers/departure-date';
import HighSpeed from './containers/high-speed';
import Btn from './containers/btn';

import CitySelector from '@/components/city-selector';
import DateSelector from '@/components/date-selector';

import css from './index.module.less';

function Home(props) {
  const {
    from,
    to,
    citySelectorStatus,
    departDate,
    dateSelectorStatus,
    highSpeed,
    dispatch
  } = props;

  const onBack = useCallback(() => {
    props.history.goBack();
  }, []);

  const stationActions = useMemo(() => {
    return bindActionCreators(homeActionCreators, dispatch);
  }, []);

  const showCitySelector = (side) => {
    stationActions.showCitySelector(side);
  };

  const exchangeFromTo = () => {
    stationActions.switchStation();
  };

  const onCitySelectorBack = () => {
    stationActions.hideCitySelector();
  };

  const onCityClick = (name) => {
    stationActions.setSelectedCity(name);
  };

  const handleDepartDateClick = useCallback(() => {
    stationActions.showDateSelect();
  }, []);

  const onDateSelectorBack = () => {
    stationActions.hideDateSelect();
  };

  const onDateClick = (date) => {
    stationActions.setSelectedDate(date);
  };

  const handleToggleHighSpeed = () => {
    stationActions.toggleHighSpeedOpt();
  };

  return (
    <div className={css['home-wrapper']}>
      <div className={css['header']}>
        <Navbar title="首页" onBack={onBack} />
      </div>
      <Station
        from={from}
        to={to}
        showCitySelector={showCitySelector}
        exchangeFromTo={exchangeFromTo}
      />
      <DepartureDate departDate={departDate} onClick={handleDepartDateClick} />
      <HighSpeed highSpeed={highSpeed} toggle={handleToggleHighSpeed} />
      <Btn />

      {citySelectorStatus ? (
        <CitySelector
          show={citySelectorStatus}
          onBack={onCitySelectorBack}
          onCityClick={onCityClick}
        />
      ) : null}

      {dateSelectorStatus ? (
        <DateSelector
          title="出发日期"
          show={dateSelectorStatus}
          onBack={onDateSelectorBack}
          onDateClick={onDateClick}
        />
      ) : null}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    from: getStationFrom(state),
    to: getStationTo(state),
    citySelectorStatus: getCitySelectorStatus(state),
    departDate: getDepartDate(state),
    dateSelectorStatus: getDateSelectorStatus(state),
    highSpeed: getHighSpeedStatus(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
