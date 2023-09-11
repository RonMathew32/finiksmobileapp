import axios from 'axios';
import store from '../redux/store';
const FiniksApi = axios.create({
  baseURL: 'https://finiksbackend-stg-b8ffcd2e360d.herokuapp.com',
});

FiniksApi.interceptors.request.use(
  async config => {
    const data = store.getState();
    const token = data.userReducer.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  },
);

export default FiniksApi;
