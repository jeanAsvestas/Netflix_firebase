import api from './axios';

const fetchMoviesByGenre = async (url: string) => {
  try {
    const req = await api.get(url);
    return req;
  } catch (err) {
    console.log(err);
  }
};

const apiCalls = {
  fetchMoviesByGenre,
};

export default apiCalls;
