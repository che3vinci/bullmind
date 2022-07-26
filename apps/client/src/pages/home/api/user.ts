import { makeApi } from '@c3/api';

export const fetchUser = makeApi({
  method: 'get',
  url: 'http://localhost:3333/api/users/info',
  mockData: {},
});
