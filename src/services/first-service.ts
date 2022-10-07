import axiosBearer from './axiosBearer';
import axiosBasic from './axiosBasic';

const getFirstObject = (appId: string, assetsId: string | undefined) => {
  //try URLSearchParams for the first object
  return axiosBearer.get(`${process.env.REACT_APP_API_URL}` + `/${assetsId}`, {
    headers: {
      'X-PB-App-Id': appId,
    },
  });
};
const postFirstObject = (appId: string) => {
  const res = axiosBearer.post(
    `${process.env.REACT_APP_API_URL}` + '/',
    {},
    {
      headers: {
        'X-PB-App-Id': appId,
      },
    }
  );
  return res;
};

const getFirstObjectBasic = () => {
  return axiosBasic.post(
    `${process.env.REACT_APP_API_URL}`,
    {},
    {
      headers: {
        'X-PB-App-Id': 'Mobimo',
      },
      auth: {
        username: 'JMeterUser',
        password: 'asdfg12345',
      },
    }
  );
};
const firstObjectService = {
  getFirstObject,
  postFirstObject,
  getFirstObjectBasic,
};

export default firstObjectService;
