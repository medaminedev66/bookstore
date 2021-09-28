import React from 'react';
import Book from './Book';

class BooksList extends React.Component {
  state = [
    {
      title: 'The power',
      Author: 'Amine',
    },
    {
      title: 'The power of focusing',
      Author: 'Mark',
    },
  ];

  render() {
    return (
      <div className="list">
        {this.state.map((book) => (
          <Book key={book.title} title={book.title} author={book.author} />
        ))}
      </div>
    );
  }
}

export default BooksList;
