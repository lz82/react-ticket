import React, { useState, useEffect } from 'react';

import { commonApi } from '@/services';

export default function Schedule(props) {
  const [scheduleList, setScheduleList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await commonApi.querySchedule();
        setScheduleList(res);
        console.log(scheduleList);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="dialog">
        <h1>列车时刻表</h1>
        <div className="head">
          <span className="station">车站</span>
          <span className="deptime">到达</span>
          <span className="arrtime">发车</span>
          <span className="stoptime">停留时间</span>
        </div>
        {/* <ul>{scheduleList.map((schedule, index) => schedule)}</ul> */}
      </div>
    </div>
  );
}
