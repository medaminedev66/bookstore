import React from 'react';
import Book from './Book';

class BooksList extends React.Component {
  constructor(props) {
    super(props);
    this.state = [
      {
        title: 'The power',
        Author: 'Amine',
      },
      {
        title: 'The power of focusing',
        Author: 'Mark',
      },
    ];
  }

  render() {
    const books = this.state;
    return (
      <div className="list">
        {books.map((book) => (
          <Book key={book.title} title={book.title} author={book.author} />
        ))}
      </div>
    );
  }
}

export default BooksList;
