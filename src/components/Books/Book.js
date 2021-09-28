import React from 'react';
import styles from './books.module.css';

class Book extends React.Component {
  render() {
    return (
      <div className={styles.book}>
        <div className={styles.info}>
          <p>{this.props.title}</p>
          <p>{this.props.author}</p>
        </div>
        <button>Delete</button>
      </div>
    );
  }
}

export default Book;
