import React, { useCallback, useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovieHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://swapi.dev/api/films/');

      if (!response.ok) {
        throw new Error('is wrong');
      }

      const data = await response.json();

      const transformedData = data.results.map(
        movie => {
          return {
            id: movie.episode_id,
            title: movie.episode_id,
            openingText: movie.opening_crawl,
            releaseData: movie.release_date
          };
        }
      );
      setMovies(data.results);
    }
    catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMovieHandler();
  }, [fetchMovieHandler])

  // -----Promise then-----
  // function fetchMovieHandler () {
  //   fetch('https://swapi.dev/api/films').then(response => {
  //     return response.json();
  //   }).then(data => {
  //     const transformedData = data.results.map(
  //       movie => {
  //         return {
  //           id: movie.episode_id,
  //           title: movie.episode_id,
  //           openingText: movie.opening_crawl,
  //           releaseData: movie.release_date
  //         };
  //       }
  //     );
  //     setMovies(data.results);
  //   })
  // }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length == 0 && !error && <p>no movies</p>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>loaing...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
