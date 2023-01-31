import styles from './Modal.module.css';
import React, { Component } from 'react';
import { createPortal } from 'react-dom';

const rootModal = document.querySelector('#root-modal');

class modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModalByEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModalByEsc);
  }

  closeModalByEsc = event => {
    if (event.code === 'Escape') {
      this.props.addToggleModal();
    }
  };

  closeModalByClickBackdrop = event => {
    if (event.currentTarget === event.target) {
      this.props.addToggleModal();
    }
  };

  render() {
    return createPortal(
      <div className={styles.overlay} onClick={this.closeModalByClickBackdrop}>
        <div className={styles.modal}>{this.props.children}</div>
      </div>,
      rootModal
    );
  }
}

export default modal;
