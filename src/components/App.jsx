import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';

export class App extends Component {
  static propTypes = {};
  state = {
  };
  render()
  {
  return(
    <Layout>
      <GlobalStyle />
      <Searchbar />
     
    </Layout>
    );
  }
};
