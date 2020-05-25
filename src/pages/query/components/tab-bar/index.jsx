import React, { memo } from 'react';
import classnames from 'classnames';
import css from './index.module.less';

import { ORDER_TYPE } from '@/utils/constant';

import FilterModal from '../filter-modal';

const TabBar = memo(function TabBar(props) {
  const {
    toggleOrderType,
    toggleHighSpeed,
    toggleOnlyTickets,
    toggleIsFiltersVisible,
    highSpeed,
    orderType,
    onlyTickets,
    isFiltersVisible,
    filter
  } = props;
  return (
    <div className={css['bottom']}>
      <div className={css['bottom-filters']}>
        <span className={css['item']} onClick={toggleOrderType}>
          <i className={classnames('iconfont', 'icon-clock', [css['icon']])} />
          {orderType === ORDER_TYPE.DURATION ? '耗时 短→长' : '出发 早→晚'}
        </span>
        <span
          className={classnames(css['item'], { [css['item-on']]: highSpeed })}
          onClick={toggleHighSpeed}
        >
          <i className={classnames('iconfont', 'icon-high-speed-train', [css['icon']])} />
          只看高铁动车
        </span>
        <span
          className={classnames(css['item'], { [css['item-on']]: onlyTickets })}
          onClick={toggleOnlyTickets}
        >
          <i className={classnames('iconfont', 'icon-ticket', [css['icon']])} />
          只看有票
        </span>
        <span
          className={classnames(css['item'], {
            [css['item-on']]: isFiltersVisible
          })}
          onClick={toggleIsFiltersVisible}
        >
          <i className={classnames('iconfont', 'icon-filter', [css['icon']])} />
          综合筛选
        </span>
      </div>
      {isFiltersVisible ? <FilterModal filter={filter} /> : null}
    </div>
  );
});

export default TabBar;
