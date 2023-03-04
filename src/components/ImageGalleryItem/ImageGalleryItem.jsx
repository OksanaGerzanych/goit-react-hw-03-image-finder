import React from 'react';
import PropTypes from 'prop-types';
import { GalleryItem, GalleryImg } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  image: { webformatURL, id, tags, largeImageURL },
  onClick,
}) => {
  return (
    <GalleryItem key={id}>
      <GalleryImg
        src={webformatURL}
        alt={tags}
        onClick={() => onClick(largeImageURL)}
      />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  tags: PropTypes.array,
  id: PropTypes.number,
  onClick: PropTypes.func,
};
