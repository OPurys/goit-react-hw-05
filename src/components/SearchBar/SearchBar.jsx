import css from './SearchBar.module.css';
import { Field, Form, Formik } from 'formik';

const SearchBar = ({ handleChangeQuery }) => {
  const initialValues = {
    query: '',
  };

  function handleSubmit(values, actions) {
    handleChangeQuery(values.query);
    actions.resetForm();
  }

  return (
    <div className={css.searchContainer}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.searchForm}>
          <Field
            name="query"
            className={css.searchInput}
            placeholder="Search movies..."
          />
          <button type="submit" className={css.searchButton}>
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;
