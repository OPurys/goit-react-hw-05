import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

const MovieList = ({ movies }) => {
  const location = useLocation();

  const defaultImg =
    'https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster';

  return (
    <ul className={css.movieList}>
      {movies.map(({ id, title, poster_path }) => (
        <li key={id} className={css.movieItem}>
          <Link to={`/movies/${id}`} state={location} className={css.movieLink}>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : defaultImg
              }
              width={150}
              alt={title}
              className={css.movieImage}
            />
            <h2 className={css.movieTitle}>{title}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
