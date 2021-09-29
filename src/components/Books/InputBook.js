import { React } from 'react';
import PropTypes from 'prop-types';
import styles from './books.module.css';

const InputBook = (props) => {
  let title = '';
  let author = '';

  const addTitle = (e) => {
    title = e.target.value;
  };

  const addAuthor = (e) => {
    author = e.target.value;
  };

  const submitBookToStore = () => {
    props.addBook(title, author);
  };

  return (
    <div className={styles.booksForm}>
      <input
        type="text"
        placeholder="title of the book..."
        onChange={addTitle}
      />
      <input
        type="text"
        placeholder="Author of the book..."
        onChange={addAuthor}
      />
      <button type="button" onClick={submitBookToStore}>
        Add Book
      </button>
    </div>
  );
};

InputBook.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default InputBook;
