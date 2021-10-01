import { React } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BooksList = (props) => {
  const { removeBook, books } = props;
  return (
    <div className="books-list">
      {books.map((book) => (
        <Book key={book.item_id} book={book} removeBook={removeBook} />
      ))}
    </div>
  );
};

BooksList.propTypes = {
  removeBook: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  books: PropTypes.array.isRequired,
};

export default BooksList;
