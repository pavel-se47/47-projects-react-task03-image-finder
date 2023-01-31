import styles from './Button.module.css';

const loadMoreButton = ({ onClick }) => (
  <button type="button" className={styles.button} onClick={onClick}>
    Load more
  </button>
);

export default loadMoreButton;
