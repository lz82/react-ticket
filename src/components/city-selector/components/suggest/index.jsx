import React, { useState, useEffect, memo } from 'react';

import { commonApi } from '@/services';

import css from './index.module.less';

function Suggest(props) {
  const { searchKey, onClick } = props;

  const [result, setResult] = useState([]);

  useEffect(() => {
    const fetchSuggest = async () => {
      const res = await commonApi.querySuggest(searchKey);
      setResult(res.result);
    };

    fetchSuggest();
  }, [searchKey]);

  return (
    <div className={css['suggest-wrapper']}>
      <ul className={css['container']}>
        {result.map((item) => {
          return (
            <li key={item.display} className={css['item']} onClick={() => onClick(item.display)}>
              {item.display}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default memo(Suggest);
