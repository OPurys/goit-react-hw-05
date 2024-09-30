import { useSearchParams } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';
import css from './MoviesPage.module.css';
import { useEffect, useMemo, useState } from 'react';
import { fetchMovies } from '../../services/api';
import MovieList from '../../components/MovieList/MovieList';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getData() {
      if (!query) return;

      const data = await fetchMovies(query);
      setMovies(data);
    }

    getData();
  }, [query]);

  function handleChangeQuery(newQuery) {
    if (!newQuery) {
      return setSearchParams({});
    }

    searchParams.set('query', newQuery);
    setSearchParams(searchParams);
  }

  const filteredData = useMemo(
    () =>
      movies.filter(movie =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      ),
    [query, movies]
  );

  return (
    <div>
      <SearchBar handleChangeQuery={handleChangeQuery} />
      <MovieList movies={filteredData} />
    </div>
  );
};

export default MoviesPage;
