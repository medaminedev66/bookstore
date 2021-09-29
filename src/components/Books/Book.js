import { React, PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './books.module.css';

class Book extends PureComponent {
  remove = () => {
    const { book, removeBook } = this.props;
    removeBook(book);
  };

  render() {
    const { title, author } = this.props;
    return (
      <div className={styles.book}>
        <div className={styles.info}>
          <p>{title}</p>
          <p>{author}</p>
        </div>
        <button type="button" onClick={this.remove}>
          Delete
        </button>
      </div>
    );
  }
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  book: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
