import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import css from './MovieDetailsPage.module.css';
import { Suspense, useEffect, useRef, useState } from 'react';
import { fetchInfoAboutMovies } from '../../services/api';
import Loader from '../../components/Loader/Loader';

const MovieDetailsPage = () => {
  const location = useLocation();
  const goBackRef = useRef(location.state ?? '/movies');

  const { movieId } = useParams();
  const [moviesDetails, setMoviesDetails] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    async function getData() {
      const data = await fetchInfoAboutMovies(movieId);
      setMoviesDetails(data);
    }

    getData();
  }, [movieId]);

  if (!moviesDetails) return <Loader />;

  const defaultImg =
    'https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster';

  return (
    <div className={css.detailsContainer}>
      <Link to={goBackRef.current} className={css.goBackLink}>
        Go back
      </Link>
      <div className={css.detailsContent}>
        <div className={css.posterContainer}>
          <img
            src={
              moviesDetails.poster_path
                ? `https://image.tmdb.org/t/p/w500/${moviesDetails.poster_path}`
                : defaultImg
            }
            width={250}
            alt={moviesDetails.title}
            className={css.posterImage}
          />
        </div>
        <ul className={css.movieInfo}>
          <li className={css.movieItem}>
            <h1 className={css.movieTitle}>{moviesDetails.title}</h1>
          </li>
          <li className={css.movieItem}>
            <p className={css.info}>
              <b className={css.accent}>Overview:</b>
              {moviesDetails.overview}
            </p>
          </li>
          <li className={css.movieItem}>
            <p className={css.info}>
              <b className={css.accent}>Tagline:</b>
              {moviesDetails.tagline}
            </p>
          </li>
          <li className={css.movieItem}>
            <p className={css.info}>
              <b className={css.accent}>Genres:</b>
              {moviesDetails.genres.map(item => item.name).join(', ')}
            </p>
          </li>
          <li className={css.movieItem}>
            <p className={css.info}>
              <b className={css.accent}>Runtime:</b>
              {moviesDetails.runtime} min
            </p>
          </li>
          <li className={css.movieItem}>
            <p className={css.info}>
              <b className={css.accent}>Release:</b>
              {moviesDetails.release_date}
            </p>
          </li>
        </ul>
      </div>

      <hr className={css.divider} />

      <div className={css.additionalInfo}>
        <h2 className={css.additionalTitle}>Additional information</h2>
        <ul className={css.additionalLinks}>
          <li>
            <Link to="cast" className={css.additionalLink}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" className={css.additionalLink}>
              Reviews
            </Link>
          </li>
        </ul>

        <hr className={css.divider} />

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
