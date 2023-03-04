import { fetchImage } from 'components/Api';
import React, { Component } from 'react';
import { Gallery } from './ImageGallery.styled';

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import { ButtonLoadMore } from 'components/Button/Button';

export class ImageGallery extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
    page: 1,
    loadMore: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.values !== this.props.values ||
      prevState.page !== this.state.page
    ) {
      this.setState({ loading: true });
      fetchImage(this.props.values, this.state.page)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(new Error(`error ${this.props.prevProps}`));
        })
        .then(images => {
          this.setState({ images: [...this.state.images, ...images.hits] });
        })
        .catch(error => this.setState({ error }))
        .finally(() => {
          this.setState({ loading: false });
        });
    }
  }

  handleLoadMore = () => {
    this.setState(prevPage => ({
      page: prevPage.page + 1,
    }));
  };

  render() {
    return (
      <Gallery>
        {this.state.error && <h2>{this.state.error.message}</h2>}
        {this.state.loading && <Loader />}
        {this.state.images.length > 0 &&
          this.state.images.map(image => {
            return (
              <ImageGalleryItem
                key={image.id}
                image={image}
                onClick={this.props.onClick}
              />
            );
          })}
        {this.state.images.length !== 0 && 
          <ButtonLoadMore onClick={this.handleLoadMore} />
        }
      </Gallery>
    );
  }
}
