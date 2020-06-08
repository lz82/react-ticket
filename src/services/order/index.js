import { AppGet } from '@/utils/request';

export function getOrderInfo(data) {
  return AppGet('/order', data);
}
