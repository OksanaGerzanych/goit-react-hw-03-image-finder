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
    showModal: false,
    id: null,
  };

  handelSubmit = (textSearch) => {
    this.setState({ textSearch });
  };

  openModal = event => {
		this.setState({
			showModal: true,
			id: event.currentTarget.dataset.id,
		});
	};

	closeModal = () => {
		this.setState({
			showModal: false,
		});
	};

  render() {
    
    return (
      <Layout>
        <Toaster
          duration={1500}
          position="top-right"
          reverseOrder={false}/>
        <GlobalStyle />
        <Searchbar onSearch={this.handelSubmit} />
        <ImageGallery values={this.state.textSearch} />
        {this.state.showModal && <Modal images={this.state.images} id={Number(this.state.id)}onClose={this.closeModal} />}
      </Layout>
    );
  }
}
