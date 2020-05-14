import dayjs from 'dayjs';

// 获取年-月-日
export const getDate = (date) => {
  if (date) {
    return dayjs(date).format('YYYY-MM-DD');
  } else {
    return dayjs().format('YYYY-MM-DD');
  }
};

// 获取周几
export const getWeek = (date) => {
  if (date) {
    return dayjs(date).day();
  } else {
    return dayjs().day();
  }
};

// 获取0时0分0秒
export const getDateZero = (date) => {
  if (date) {
    return dayjs(date).hour(0).minute(0).second(0).millisecond(0);
  } else {
    return dayjs().hour(0).minute(0).second(0).millisecond(0);
  }
};
