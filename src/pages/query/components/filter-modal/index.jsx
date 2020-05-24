import React from 'react';
import classnames from 'classnames';
import Group from '../group';
import css from './index.module.less';

export default function FilterModal(props) {
  const {
    isResetDisabled,
    reset,
    sure,
    group = [{ title: '坐席类型' }, { title: '车次类型' }]
  } = props;
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
                <h1>haha</h1>
              </Group>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
