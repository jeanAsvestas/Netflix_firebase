import type { RequestsInterface } from '../model/main.types';

export const requests: RequestsInterface = {
  trending: {
    fetchUrl: `/trending/all/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`,
    title: 'Trending',
  },
  originals: {
    fetchUrl: `/discover/tv?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_networks=213`,
    title: 'Netflix Originals',
  },
  topRated: {
    fetchUrl: `/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`,
    title: 'Top Rated',
  },
  actionMovies: {
    fetchUrl: `discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=28`,
    title: 'Action',
  },
  comedyMovies: {
    fetchUrl: `discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=35`,
    title: 'Comedy',
  },
  horrorMovies: {
    fetchUrl: `discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=27`,
    title: 'Horror',
  },
  romanceMovies: {
    fetchUrl: `discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=10749`,
    title: 'Romance',
  },
  documentaries: {
    fetchUrl: `discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=99`,
    title: 'Documentaries',
  },
};
