import React, { useReducer, useMemo } from 'react';
import classnames from 'classnames';
import Group from '../group';
import css from './index.module.less';

export default function FilterModal(props) {
  const {
    toggleIsFiltersVisible,
    checkedArrStation,
    checkedDepStation,
    checkedTicketType,
    checkedTrainType,
    filter,
    setCheckedArrStation,
    setCheckedDepStation,
    setCheckedTrainType,
    setCheckedTicketType
  } = props;
  console.log(checkedTicketType);

  const reducer = (state, action) => {
    console.log(action);
    const { type, payload } = action;
    let newState = { ...state };
    switch (type) {
      case 'toggle':
        if (payload in newState) {
          delete newState[payload];
        } else {
          newState[payload] = true;
        }
        return newState;
      case 'reset':
        return {};
    }
    return newState;
  };

  const [localCheckedTicketType, dispatchTicketType] = useReducer(
    reducer,
    checkedTicketType,
    (checkedTicketType) => {
      return { ...checkedTicketType };
    }
  );

  const [localCheckedTrainType, dispatchTrainType] = useReducer(
    reducer,
    checkedTrainType,
    (checkedTrainType) => {
      return { ...checkedTrainType };
    }
  );

  const [localCheckedDepStation, dispatchDepStation] = useReducer(
    reducer,
    checkedDepStation,
    (checkedDepStation) => {
      return { ...checkedDepStation };
    }
  );

  const [localCheckedArrStation, dispatchArrStation] = useReducer(
    reducer,
    checkedArrStation,
    (checkedArrStation) => {
      return { ...checkedArrStation };
    }
  );

  const group = [
    {
      title: '坐席类型',
      options: filter.ticketType,
      checked: localCheckedTicketType,
      dispatch: dispatchTicketType
    },
    {
      title: '车次类型',
      options: filter.trainType,
      checked: localCheckedTrainType,
      dispatch: dispatchTrainType
    },
    {
      title: '出发车站',
      options: filter.depStation,
      checked: localCheckedDepStation,
      dispatch: dispatchDepStation
    },
    {
      title: '到达车站',
      options: filter.arrStation,
      checked: localCheckedArrStation,
      dispatch: dispatchArrStation
    }
  ];

  const reset = () => {
    dispatchTicketType({ type: 'reset' });
    dispatchTrainType({ type: 'reset' });
    dispatchDepStation({ type: 'reset' });
    dispatchArrStation({ type: 'reset' });
  };

  const sure = () => {
    setCheckedArrStation(localCheckedArrStation);
    setCheckedDepStation(localCheckedDepStation);
    setCheckedTrainType(localCheckedTrainType);
    setCheckedTicketType(localCheckedTicketType);
    toggleIsFiltersVisible();
  };

  const isResetDisabled = useMemo(() => {
    return (
      Object.keys(localCheckedArrStation).length === 0 &&
      Object.keys(localCheckedDepStation).length === 0 &&
      Object.keys(localCheckedTrainType).length === 0 &&
      Object.keys(localCheckedTicketType).length === 0
    );
  }, [
    localCheckedArrStation,
    localCheckedDepStation,
    localCheckedTrainType,
    localCheckedTicketType
  ]);

  return (
    <div className={css['filter-modal-wrapper']}>
      <div className={css['dialog']}>
        <div className={css['content']}>
          <div className={css['title']}>
            <span
              className={classnames([css['reset']], {
                [css['disabled']]: isResetDisabled
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
            {group.map((item) => (
              <Group key={item.title} title={item.title}>
                {item.options.map((option) => {
                  return (
                    <li
                      key={option.value}
                      className={classnames({
                        [css['checked']]: option.value in item.checked
                      })}
                      onClick={() => item.dispatch({ type: 'toggle', payload: option.value })}
                    >
                      {option.name}
                    </li>
                  );
                })}
              </Group>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
