import React, { useCallback, useMemo } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  homeActionCreators,
  getStationFrom,
  getStationTo,
  getCitySelectorStatus
} from '@/stores/modules/home';

import Navbar from '@/components/navbar';
import Station from './containers/station';
import DepartureDate from './containers/departure-date';
import HighSpeed from './containers/high-speed';
import Btn from './containers/btn';

import CitySelector from '@/components/city-selector';

import css from './index.module.less';

function Home(props) {
  const { from, to, citySelectorStatus, dispatch } = props;

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
      <DepartureDate />
      <HighSpeed />
      <Btn />

      <CitySelector
        show={citySelectorStatus}
        onBack={onCitySelectorBack}
        onCityClick={onCityClick}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    from: getStationFrom(state),
    to: getStationTo(state),
    citySelectorStatus: getCitySelectorStatus(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
