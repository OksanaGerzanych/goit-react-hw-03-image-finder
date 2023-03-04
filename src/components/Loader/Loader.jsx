import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { LoaderStyled } from './Loader.styled';

export const Loader = () => (
  <LoaderStyled>
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#3b28ba"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
    Load More
  </LoaderStyled>
);
