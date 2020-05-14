import React, { useState, useMemo, useEffect, createContext, useCallback } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import CityList from './components/city-list';
import CityIndex from './components/alpha-index';

import { commonApi } from '@/services';
import { appActionCreators } from '@/stores/modules/app';

import css from './index.module.less';

const CITYLIST_KEY = '$_city_list_key';

export const cityClickContext = createContext();

// 通用业务组件的数据，没必要放在redux中做处理
// 数据没必要从页面中传入
// 个人理解
function CitySelector(props) {
  // props解析
  const { onBack, show, setError, onCityClick } = props;

  // 声明state
  const [searchKey, setSearchKey] = useState('');
  const [cityList, setCityList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // 加载城市列表
  useEffect(() => {
    const fetchCity = async () => {
      const localData = JSON.parse(localStorage.getItem(CITYLIST_KEY) || '{}');

      // 如果本地数据存在，且没有过期，则从本地获取
      if (localData.expires && localData.expires > new Date() && localData.data) {
        setCityList(localData.data);
        return;
      }
      try {
        // loading start
        setIsLoading(true);
        // 调用api获取
        const res = await commonApi.queryCityList();
        // 写入state
        setCityList(res);
        // 写入localStorage
        localStorage.setItem(
          CITYLIST_KEY,
          JSON.stringify({
            expires: new Date() - 0 + 1000 * 60 * 60,
            data: res
          })
        );
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    // 当组件展示,且cityList为空的时候才调用方法
    if (show && cityList.length === 0) {
      fetchCity();
    }
  }, [show, cityList]);

  // 搜索key优化
  const key = useMemo(() => {
    return searchKey.trim();
  }, [searchKey]);

  const handleCityClick = useCallback((name) => {
    onCityClick(name);
  }, []);

  const handleCityIndexClick = useCallback((index) => {
    const dom = document.querySelector(`[data-cate="${index}"]`);
    if (dom) {
      dom.scrollIntoView();
    }
  }, []);

  const outputCityList = useMemo(() => {
    if (isLoading || !cityList.cityList) {
      return <div>loading...</div>;
    } else {
      return (
        <cityClickContext.Provider value={handleCityClick}>
          <CityList sections={cityList.cityList} />
        </cityClickContext.Provider>
      );
    }
  }, [isLoading, cityList]);

  return (
    <div
      className={classnames(css['city-selector-wrapper'], {
        hidden: !show
      })}
    >
      <div className={css['search-bar']}>
        <div className={css['back']} onClick={() => onBack()}>
          <svg width="42" height="42">
            <polyline points="25,13 16,21 25,29" stroke="#fff" strokeWidth="2" fill="none" />
          </svg>
        </div>
        <div className={css['input-wrapper']}>
          <input
            type="text"
            value={searchKey}
            className={css['input']}
            placeholder="城市、车站的中文或拼音"
            onChange={(e) => setSearchKey(e.target.value)}
          />
          <i
            onClick={() => setSearchKey('')}
            className={classnames('iconfont', 'icon-clear', css['clear'], {
              hidden: key.length === 0
            })}
          />
        </div>
      </div>
      {outputCityList}
      <CityIndex onIndexClick={handleCityIndexClick} />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setError: (error) => {
      dispatch(appActionCreators.setError(error));
    }
  };
};

export default connect(null, mapDispatchToProps)(CitySelector);
