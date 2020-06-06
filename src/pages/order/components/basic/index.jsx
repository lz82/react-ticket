import React from 'react';

export default function OrderBasic(props) {
  const {
    trainNum,
    dStation,
    aStation,
    seatType,
    dDate,
    dTime,
    aDate,
    aTime,
    uriParsedStatus,
    duration
  } = props;
  console.log(
    trainNum,
    dStation,
    aStation,
    seatType,
    dDate,
    dTime,
    aDate,
    aTime,
    uriParsedStatus,
    duration
  );
  return <div>order basic</div>;
}
