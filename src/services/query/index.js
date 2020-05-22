import { AppGet } from '@/utils/request';

export function queryTrainList(data) {
  return AppGet('/query', data);
}
