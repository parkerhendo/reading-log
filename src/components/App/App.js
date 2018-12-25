import React, { Component } from 'react';
import NavigationBar from '../NavigationBar';

import * as S from './styles';
import Filter from '../Filter';

class App extends Component {
  render() {
    return (
      <S.App>
        <NavigationBar />
        <Filter />
      </S.App>
    );
  }
}

export default App;
