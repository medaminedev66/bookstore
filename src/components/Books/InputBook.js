import React from 'react';
import styles from './books.module.css';

class InputBook extends React.Component {
  render() {
    return (
      <div className={styles.booksForm}>
        <input type="text" placeholder="title of the book..." />
        <input type="text" placeholder="Auther of the book..." />
        <button>Add</button>
      </div>
    );
  }
}

export default InputBook;
