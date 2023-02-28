import React from 'react';
import { FcSearch } from 'react-icons/fc';
//import PropTypes from 'prop-types';
import { SearchBar, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput } from './Searchbar.styled';


export const Searchbar = () => {
    return (
     <SearchBar>
  <SearchForm>
    <SearchFormButton type="submit">
      <SearchFormButtonLabel><FcSearch /></SearchFormButtonLabel>
    </SearchFormButton>

    <SearchFormInput
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </SearchForm>
</SearchBar>   
    )
}

