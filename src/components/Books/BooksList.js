import { React } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BooksList = (props) => {
  const books = [
    {
      id: 1,
      title: 'The Power of Habit',
      author: 'Charles Duhigg',
    },
    {
      id: 2,
      title: 'the 5am club',
      author: 'Robin Sharma',
    },
  ];

  const { removeBook } = props;
  return (
    <div className="list">
      {books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          book={book}
          removeBook={removeBook}
        />
      ))}
    </div>
  );
};

BooksList.propTypes = {
  removeBook: PropTypes.func.isRequired,
};

export default BooksList;
