import { useEffect, useState } from 'react';
import css from './MovieCast.module.css';
import { fetchCast } from '../../services/api';
import { useParams } from 'react-router-dom';

const MovieCast = () => {
  const castId = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await fetchCast(castId);
      setCast(data);
    }

    getData();
  }, [castId]);

  const defaultImg =
    'https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster';

  return (
    <div className={css.castContainer}>
      {cast.map(({ id, profile_path, name }) => (
        <div key={id} className={css.castMember}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                : defaultImg
            }
            width={120}
            alt={name}
            className={css.profileImage}
          />
          <h3 className={css.actorName}>{name}</h3>
        </div>
      ))}
    </div>
  );
};

export default MovieCast;
