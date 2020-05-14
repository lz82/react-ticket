import { AppGet } from '@/utils/request';

export function queryCityList() {
  return AppGet('/cities');
}

export function querySuggest(key) {
  return AppGet('search', { key });
}
