import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../services/api';
import css from './HomePage.module.css';
import MovieList from '../../components/MovieList/MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await fetchTrendingMovies();
      setMovies(data);
    }

    getData();
  }, []);
  return (
    <div>
      <h1 className={css.trendingHeader}>Trending today</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
