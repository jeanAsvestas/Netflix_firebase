import axios from 'axios';

const getCountriesCarPlateCodes = (alternate: string) => {
  return axios.get(
    `http://149.81.180.82:8080/api/rest1/public/util/2022-08/international-vehicle-registration-codes?alternate=${alternate}`
  );
};
const getCountriesCodes = (alternate: string) => {
  return axios.get(
    `http://149.81.180.82:8080/api/rest1/public/util/2022-08/countries?alternate=${alternate}`,
    { timeout: 3000 }
  );
};
const getCountriesPhoneCodes = (alternate: string) => {
  return axios.get(
    `http://149.81.180.82:8080/api/rest1/public/util/2022-08/international-country-calling-codes?alternate=${alternate}`
  );
};

const countryApi = {
  getCountriesCarPlateCodes,
  getCountriesCodes,
  getCountriesPhoneCodes,
};

export default countryApi;
