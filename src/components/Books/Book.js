import { React } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

const Book = (props) => {
  const { book, removeBook } = props;
  const remove = (book) => {
    removeBook(book);
  };
  return (
    <div className="book shadow-sm bg-white border border-light">
      <div className="info">
        <p className="text-secondary font-weight-bold">{book.category}</p>
        <p className="book-title">{book.title}</p>
        <p className="font-weight-light">Author</p>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            remove(book);
          }}
        >
          Delete
        </button>
      </div>
      <div className="completed">
        <FontAwesomeIcon
          icon={faCircleNotch}
          size="4x"
          className="text-primary"
        />
        <div>
          <p className="percent">64%</p>
          <p>Completed</p>
        </div>
      </div>
      <div className="chapter">
        <p className="text-uppercase text-secondary">Current Chapter</p>
        <p className="">
          Chapter
          {17}
        </p>
        <button type="button" className="btn btn-primary btn-block">
          Update Info
        </button>
      </div>
    </div>
  );
};

Book.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  book: PropTypes.object.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
