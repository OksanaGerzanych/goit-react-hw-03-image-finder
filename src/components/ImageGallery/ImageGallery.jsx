import { fetchImage } from 'components/Api';
import React, { Component } from 'react';
import { Gallery } from './ImageGallery.styled';

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import { ButtonLoadMore } from 'components/Button/Button';
//import { Modal } from 'components/Modal/Modal';

export class ImageGallery extends Component {
  state = {
    images: null,
    loading: false,
    error: null,
    page: 1,
    loadMore: false,
    // showModal: false, 
    // id: null,
  };

 
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.values !== this.props.values || prevState.page !== this.state.page) {
      this.setState({ loading: true });
      fetchImage(this.props.values, this.state.page)
        .then(response => {
          if (response.ok) {
            return response.json()
          }
          return Promise.reject(new Error(`error ${this.props.prevProps}`))
          
         })
        .then(images => {
          this.setState({ images});
        
        })
        .catch(error => this.setState({ error }))
        .finally(() => {
          this.setState({ loading: false });
        });
    }
  }

   handleLoadMore = () => {
     this.setState((prevPage) => ({
       page: prevPage.page + 1
     }))
  }
// openModal = event => {
// 		this.setState({
// 			showModal: true,
// 			id: event.currentTarget.dataset.id,
// 		});
// 	};

// 	closeModal = () => {
// 		this.setState({
// 			showModal: false,
// 		});
// 	};

  render() {
    return (
      <Gallery>
        {/* {this.state.showModal && <Modal images={this.state.images} id={Number(this.state.id)}onClose={this.closeModal} />} */}
        {this.state.error && <h2>{this.state.error.message}</h2>}
        {this.state.loading && <Loader />}
        {this.state.images &&
          this.state.images.hits.map(image => {
            return <ImageGalleryItem key={image.id} image={image} onClick={this.openModal} />
              ;
          })}
        {this.state.images&& < ButtonLoadMore onClick={this.handleLoadMore}/>}
      </Gallery>
    );
  }
}


