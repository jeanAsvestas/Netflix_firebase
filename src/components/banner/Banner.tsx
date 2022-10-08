import { useState, useEffect } from 'react';
import api from '../../services/axios';
import './Banner.scss';
import { requests } from '../../services/requests-urls';
const backgroundBaseUrl = 'https://image.tmdb.org/t/p/original/';
const defaultBackgroundImage =
  'https://assets.vogue.in/photos/627cb0eaecb3436d3f16f9fe/16:9/w_1280,c_limit/netflix-series-2019-roster-1.png';

interface MovieInterface {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export const Banner = () => {
  const [movie, setMovie] = useState<MovieInterface | null>(null);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const req = await api.get(requests.fetchOriginals);
        setMovie(
          req.data.results[
            Math.floor(Math.random() * req.data.results.length - 1)
          ]
        );
      } catch (err) {
        console.log(err);
      }
    }
    fetchMovie();
  }, []);
  const truncate = (string: string, n: number) => {
    return string?.length > n ? string.substr(0, n - 1).concat('...') : string;
  };
  console.log(movie);
  return (
    <header
      className="banner"
      style={{
        backgroundImage: movie
          ? `url(${backgroundBaseUrl}${movie.poster_path})`
          : `url(${defaultBackgroundImage})`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{movie && movie.name}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My list</button>
        </div>
        <h1 className="banner__description">
          {movie && truncate(movie.overview, 250)}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};
