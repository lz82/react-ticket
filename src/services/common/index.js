import { AppGet } from '@/utils/request';

export function queryCityList() {
  return AppGet('/cities');
}

export function querySuggest(key) {
  return AppGet('search', { key });
}

export function queryTicket(data) {
  return AppGet('ticket', data);
}

export function querySchedule(data) {
  return AppGet('schedule', data);
}
