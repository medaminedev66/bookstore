import { React, PureComponent } from 'react';
import BooksList from './BooksList';
import InputBook from './InputBook';

class BooksContainer extends PureComponent {
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
