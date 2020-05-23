import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';

// 获取年-月-日
export const getDate = (date) => {
  if (date) {
    return dayjs(date).format('YYYY-MM-DD');
  } else {
    return dayjs().format('YYYY-MM-DD');
  }
};

// 获取格式化日期
export const getFormatDate = (date, format) => {
  return dayjs(date).format(format)
}

// 获取汉语周几
export const getLocalWeek = date => {
  return dayjs(date).locale('zh-cn').format('ddd')
}

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
