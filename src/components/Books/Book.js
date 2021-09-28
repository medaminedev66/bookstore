import { React, PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './books.module.css';

class Book extends PureComponent {
  render() {
    const { title, author } = this.props;
    return (
      <div className={styles.book}>
        <div className={styles.info}>
          <p>{title}</p>
          <p>{author}</p>
        </div>
        <button type="button">Delete</button>
      </div>
    );
  }
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
