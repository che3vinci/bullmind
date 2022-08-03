import { initMakeApi } from '@c3/api';
import axios from 'axios';
const http = axios.create({
  baseURL: 'http://localhost:3333/api',
  timeout: 0,
  withCredentials: true,
  responseType: 'json',
});
const makeApi = initMakeApi({ rawHttp: http });

export const fetchUser = makeApi({
  method: 'get',
  url: '/users/info',
  mockData: {},
});
