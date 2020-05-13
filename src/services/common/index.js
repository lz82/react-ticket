import { AppGet } from '@/utils/request';

export function queryCityList() {
  return AppGet('/cities');
}
