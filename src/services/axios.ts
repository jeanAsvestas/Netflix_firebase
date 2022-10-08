import axios from 'axios';

const url = 'https://api.themoviedb.org/3';

const api = axios.create({
  baseURL: url,
});

export default api;
