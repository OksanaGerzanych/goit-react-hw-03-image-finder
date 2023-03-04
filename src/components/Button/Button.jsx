import React from 'react';
import { LoadMore } from './Button.styled';
 import PropTypes from 'prop-types';



export const ButtonLoadMore = ({ onClick }) => (
    <LoadMore type='button' onClick={onClick}>Load More</LoadMore>
);

ButtonLoadMore.propTypes = {
 onClick: PropTypes.func,
}