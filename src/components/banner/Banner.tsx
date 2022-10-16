import { useState, useEffect } from 'react';
import api from '../../services/axios';
import './Banner.scss';
import type { MovieInterface } from '../../model/main.types';
import { requests } from '../../services/requests-urls';

export const Banner = () => {
  const [movie, setMovie] = useState<MovieInterface | null>(null);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const req = await api.get(requests.originals.fetchUrl);
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

  return (
    <header
      className="banner"
      style={{
        backgroundImage: movie
          ? `url(${process.env.REACT_APP_BASE_IMG_URL}${movie.backdrop_path})`
          : `url(${process.env.REACT_APP_DEFAULT_BASE_IMG_URL})`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie && (movie.name || movie.original_name)}
        </h1>
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
