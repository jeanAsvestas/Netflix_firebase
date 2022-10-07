import axios from 'axios';
const axiosBasic = axios.create();
axiosBasic.interceptors.request.use(
  (config) => {
    if (config.headers) {
      config.headers['Authorization'] =
        'Basic ' + 'JMeterUser' + ':' + 'asdfg12345';
      return config;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosBasic;
