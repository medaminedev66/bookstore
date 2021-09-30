import { React } from 'react';
import PropTypes from 'prop-types';
import styles from './books.module.css';

const Book = (props) => {
  const { book, removeBook } = props;
  const remove = (book) => {
    removeBook(book);
  };
  return (
    <div className={styles.book}>
      <div className={styles.info}>
        <p>{book.title}</p>
        <p>{book.author}</p>
      </div>
      <button
        type="button"
        onClick={() => {
          remove(book);
        }}
      >
        Delete
      </button>
    </div>
  );
};

Book.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  book: PropTypes.object.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
