import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import BooksList from './BooksList';
import InputBook from './InputBook';
import { removeBook, fetchData, sendData } from '../../redux/books/books';

const BooksContainer = () => {
  const books = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  const submitBookToStore = (title, category) => {
    const newBook = {
      item_id: uuidv4(), // make sure it's unique
      title,
      category,
    };

    // dispatch an action and pass it the newBook object (your action's payload)
    dispatch(sendData(newBook));
  };

  const remove = (book) => {
    dispatch(removeBook(book));
  };

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="book-page">
      <BooksList className="book-list" removeBook={remove} books={books} />
      <InputBook addBook={submitBookToStore} />
    </div>
  );
};

export default BooksContainer;
