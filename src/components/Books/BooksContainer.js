import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import BooksList from './BooksList';
import InputBook from './InputBook';
import { addBook, removeBook } from '../../redux/books/books';

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

  const remove = (book) => {
    dispatch(removeBook(book));
  };

  return (
    <div className="container">
      <InputBook addBook={submitBookToStore} />
      <BooksList removeBook={remove} />
    </div>
  );
};

export default BooksContainer;
