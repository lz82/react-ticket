import React from 'react';
import classnames from 'classnames';
import Group from '../group';
import css from './index.module.less';

export default function FilterModal(props) {
  const { isResetDisabled, reset, sure, filter } = props;
  const group = [
    {
      title: '坐席类型',
      options: filter.ticketType
    },
    {
      title: '车次类型',
      options: filter.trainType
    },
    {
      title: '出发车站',
      options: filter.depStation
    },
    {
      title: '到达车站',
      options: filter.arrStation
    }
  ];
  return (
    <div className={css['filter-modal-wrapper']}>
      <div className={css['dialog']}>
        <div className={css['content']}>
          <div className={css['title']}>
            <span
              className={classnames([css['reset']], {
                disabled: isResetDisabled
              })}
              onClick={reset}
            >
              重置
            </span>
            <span className={css['ok']} onClick={sure}>
              确定
            </span>
          </div>
          <div className={css['options']}>
            {/* {optionGroup.map((group) => (
              <Option {...group} key={group.title} />
            ))} */}
            {group.map((item) => (
              <Group key={item.title} title={item.title}>
                {item.options.map((option) => {
                  return <li key={option.value}>{option.name}</li>;
                })}
              </Group>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
