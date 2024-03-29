import { React } from 'react';
import PropTypes from 'prop-types';

const InputBook = ({ addBook }) => {
  let title = '';
  let author = '';
  let category = '';

  const addTitle = (e) => {
    title = e.target.value;
  };

  const addAuthor = (e) => {
    author = e.target.value;
  };

  const addCategory = (e) => {
    category = e.target.value;
  };

  const submitBookToStore = () => {
    addBook(author, title, category);
  };

  return (
    <>
      <p className="add-title text-secondary font-weight-bold">ADD NEW BOOK</p>
      <div className="booksForm">
        <input
          type="text"
          className="form-control title"
          placeholder="title of the book..."
          onChange={addTitle}
        />
        <input
          type="text"
          className="form-control category"
          placeholder="Author of the book..."
          onChange={addAuthor}
        />
        <input
          type="text"
          className="form-control category"
          placeholder="Category of the book..."
          onChange={addCategory}
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={submitBookToStore}
        >
          Add Book
        </button>
      </div>
    </>
  );
};

InputBook.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default InputBook;
