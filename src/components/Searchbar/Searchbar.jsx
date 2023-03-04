import React, { Component } from 'react';
import { FcSearch } from 'react-icons/fc';
import toast from 'react-hot-toast';
//import PropTypes from 'prop-types';
import {
  SearchBar,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

export class Searchbar extends Component {
  static propTypes = {};
  state = {
    imgName: '',
  };

  imgNameChange = event => {
    this.setState({ imgName: event.target.value.toLowerCase() });
  };
  handelSubmit = event => {
    event.preventDefault();
    if (this.state.imgName.trim() === '') {
      toast.error('Please enter your search query :)');
      return;
    }
    this.props.onSearch(this.state.imgName);
    this.setState({ imgName: '' });
  };

  render() {
    return (
      <SearchBar>
        <SearchForm onSubmit={this.handelSubmit}>
          <SearchFormButton type="submit">
            <FcSearch />
            <SearchFormButtonLabel></SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            name="imgName"
            autocomplete="off"
            value={this.state.imgName}
            onChange={this.imgNameChange}
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchBar>
    );
  }
}
