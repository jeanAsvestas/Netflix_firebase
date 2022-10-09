import './Row.scss';
import type { RequestType, MovieInterface } from '../../model/main.types';
import { useEffect, useState } from 'react';
import apiCalls from '../../services/apicalls';
import { AxiosResponse } from 'axios';

interface RowProps {
  request: RequestType;
  isPoster: boolean;
}

export const Row = ({ request, isPoster }: RowProps) => {
  const [movies, setMovies] = useState<MovieInterface[] | null>(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = (await apiCalls.fetchMoviesByGenre(
          request.fetchUrl
        )) as AxiosResponse;
        setMovies(res.data.results);
      } catch (err) {
        console.log(err);
      }
    };

    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(isPoster, !isPoster);
  return (
    <div className="row">
      <h2>{request.title}</h2>
      <div className="row__tiles-container">
        {movies &&
          movies.map(
            (movie: MovieInterface) =>
              ((!isPoster && movie.backdrop_path) ||
                (isPoster && movie.poster_path)) && (
                <img
                  className={`row__tile ${isPoster ? ' row__poster-tile' : ''}`}
                  key={movie.id}
                  src={`${process.env.REACT_APP_BASE_IMG_URL}${
                    isPoster ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt="movie poster"
                />
              )
          )}
      </div>
    </div>
  );
};
