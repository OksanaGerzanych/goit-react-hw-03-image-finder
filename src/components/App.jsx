import React, { Component } from 'react';

import { Toaster } from 'react-hot-toast';
import { GlobalStyle } from './GlobalStyle';

import { Searchbar } from './Searchbar/Searchbar';
import { Layout } from './Layout';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    textSearch: '',
    modalImg: '',
    showModal: false,
    id: null,
  };

  handelSubmit = textSearch => {
    this.setState({ textSearch });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  getLargeImg = url => {
    this.toggleModal();
    this.setState({ modalImg: url });
  };

  render() {
    return (
      <Layout>
        <Toaster duration={1500} position="top-right" reverseOrder={false} />
        <GlobalStyle />
        <Searchbar onSearch={this.handelSubmit} />
        <ImageGallery values={this.state.textSearch} onClick={this.getLargeImg} />
        {this.state.showModal && (
          <Modal largeImageURL={this.state.modalImg} onClose={this.toggleModal} />
        )}
      </Layout>
    );
  }
}
