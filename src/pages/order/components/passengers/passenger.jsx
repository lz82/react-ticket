import React from 'react';
import classnames from 'classnames';
import css from './index.module.less';

export default function Passenger(props) {
  const {
    id,
    name,
    followAdultName,
    ticketType,
    licenceNo,
    gender,
    birthday,
    onRemove,
    onUpdate,
    showGenderMenu,
    showFollowAdultMenu,
    showTicketTypeMenu
  } = props;

  const isAdult = ticketType === 'adult';
  return (
    <li className={css['passenger']}>
      <i className={css['delete']} onClick={() => onRemove(id)}>
        —
      </i>
      <ol className={css['items']}>
        <li className={css['item']}>
          <label className={classnames(css['label'], css['name'])}>姓名</label>
          <input
            type="text"
            className={classnames(css['input'], css['name'])}
            placeholder="乘客姓名"
            value={name}
            onChange={(e) => onUpdate(id, { name: e.target.value })}
          />
          <label className={css['ticket-type']} onClick={() => showTicketTypeMenu(id)}>
            {isAdult ? '成人票' : '儿童票'}
          </label>
        </li>
        {isAdult && (
          <li className={css['item']}>
            <label className={classnames(css['label'], css['licenceNo'])}>身份证</label>
            <input
              type="text"
              className={classnames(css['input'], css['licenceNo'])}
              placeholder="证件号码"
              value={licenceNo}
              onChange={(e) => onUpdate(id, { licenceNo: e.target.value })}
            />
          </li>
        )}
        {!isAdult && (
          <li className={classnames(css['item'], css['arrow'])}>
            <label className={classnames(css['label'], css['gender'])}>性别</label>
            <input
              type="text"
              className={classnames(css['input'], css['gender'])}
              placeholder="请选择"
              onClick={() => showGenderMenu(id)}
              value={gender === 'male' ? '男' : gender === 'female' ? '女' : ''}
              readOnly
            />
          </li>
        )}
        {!isAdult && (
          <li className={css['item']}>
            <label className={classnames(css['label'], css['birthday'])}>出生日期</label>
            <input
              type="text"
              className={classnames(css['input'], css['birthday'])}
              placeholder="如 19951015"
              value={birthday}
              onChange={(e) => onUpdate(id, { birthday: e.target.value })}
            />
          </li>
        )}
        {!isAdult && (
          <li className={classnames(css['item'], css['arrow'])}>
            <label className={classnames(css['label'], css['followAdult'])}>同行成人</label>
            <input
              type="text"
              className={classnames(css['input'], css['followAdult'])}
              placeholder="请选择"
              value={followAdultName || ''}
              onClick={() => showFollowAdultMenu(id)}
              readOnly
            />
          </li>
        )}
      </ol>
    </li>
  );
}
