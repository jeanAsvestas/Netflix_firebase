import axios from 'axios';
import tokenService from './token-service';
const axiosBearer = axios.create();
// axios.defaults.headers.common['Authorization'] = `${tokenService.getToken()}`;
axiosBearer.interceptors.request.use(
  (config) => {
    const token = tokenService.getToken();
    if (config.headers) {
      config.headers['Authorization'] = `Bearer ${token}`;
      return config;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosBearer;
