import { React } from 'react';
import Book from './Book';

const BooksList = () => {
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

  return (
    <div className="list">
      {books.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} />
      ))}
    </div>
  );
};

export default BooksList;
