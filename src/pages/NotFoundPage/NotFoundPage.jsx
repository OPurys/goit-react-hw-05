import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css';
import { TbError404 } from 'react-icons/tb';

const NotFoundPage = () => {
  return (
    <div className={css.notFoundContainer}>
      <h1 className={css.errorMessage}>Not Found</h1>
      <TbError404 size={120} className={css.errorIcon} />
      <Link to="/" className={css.backLink}>
        Back to HomePage
      </Link>
    </div>
  );
};

export default NotFoundPage;
