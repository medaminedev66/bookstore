import React from 'react';
import BooksList from './BooksList';
import InputBook from './InputBook';

class BooksContainer extends React.Component {
  render() {
    return (
      <div className="container">
        <InputBook />
        <BooksList />
      </div>
    );
  }
}

export default BooksContainer;
