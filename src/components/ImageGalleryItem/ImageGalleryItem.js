import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({
  smallImg,
  bigImg,
  tags,
  addToggleModal,
  addUrlBigImg,
}) => (
  <li className={styles.item} onClick={addToggleModal}>
    <img
      className={styles.image}
      src={smallImg}
      data-sourse={bigImg}
      alt={tags}
      onClick={addUrlBigImg}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  smallImg: PropTypes.string.isRequired,
  bigImg: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
