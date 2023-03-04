import React from 'react';
import { Component } from 'react';
//import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Overlay, Modalka } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <Modalka>
          <img src={this.props.largeImageURL} alt={this.props.tags} />
        </Modalka>
      </Overlay>,
      modalRoot
    );
  }
}
