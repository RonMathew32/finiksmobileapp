import axios from 'axios';
import store from '../redux/store';
//  url = "https://dev.j7konnect.com";
//url= "https://global.j7konnect.com"
//url="http://192.168.1.25:8000"

const GlobalApi = axios.create({
  baseURL: 'https://finiksbackend-stg-b8ffcd2e360d.herokuapp.com',
});

GlobalApi.interceptors.request.use(
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

export default GlobalApi;
