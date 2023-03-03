import React from 'react';
import { Component } from 'react';
//import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Overlay, Modalka } from './Modal.styled';
//import * as basicLightbox from 'basiclightbox'

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  };

  handleKeyDown = event => {
		if (event.code === 'Escape') {
			this.props.onClose();
    }
  };

  handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };
 
	findImage = () => {
		const { images, id } = this.props;
		if (id) {
			return images.find(image => image.id === id);
		}
	};
  
  render() {
    const findedImage = this.findImage();
    return createPortal(
 <Overlay onClick={this.handleBackdropClick}>
  <Modalka>
<img src={findedImage.largeImageURL} alt={findedImage.tags} />
  </Modalka>
</Overlay>, modalRoot)
  }
}


