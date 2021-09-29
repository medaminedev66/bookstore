import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import BooksList from './BooksList';
import InputBook from './InputBook';
import { addBook } from '../../redux/books/books';

const BooksContainer = () => {
  const dispatch = useDispatch();

  const submitBookToStore = (title, author) => {
    const newBook = {
      id: uuidv4(), // make sure it's unique
      title,
      author,
    };

    // dispatch an action and pass it the newBook object (your action's payload)
    dispatch(addBook(newBook));
  };

  return (
    <div className="container">
      <InputBook addBook={submitBookToStore} />
      <BooksList />
    </div>
  );
};

export default BooksContainer;
