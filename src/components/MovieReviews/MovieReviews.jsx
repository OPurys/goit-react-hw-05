import { fetchReviews } from '../../services/api';
import { useParams } from 'react-router-dom';
import css from './MovieReviews.module.css';
import { useEffect, useState } from 'react';

const MovieReviews = () => {
  const reviewsId = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await fetchReviews(reviewsId);
      setReviews(data);
    }

    getData();
  }, [reviewsId]);

  return (
    <div className={css.reviewContainer}>
      {reviews.length > 0 ? (
        <div>
          {reviews.map(
            ({ id, author, content, author_details: { rating } }) => (
              <div key={id} className={css.reviewItem}>
                <h3 className={css.reviewAuthor}>
                  {author}: {rating}
                </h3>
                <p className={css.reviewContent}>{content}</p>
              </div>
            )
          )}
        </div>
      ) : (
        <p className={css.noReviews}>
          We do not have any reviews for this movie
        </p>
      )}
    </div>
  );
};

export default MovieReviews;
